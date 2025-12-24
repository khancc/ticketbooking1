"use client";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  TextInput,
  RefreshControl,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Ionicons } from "@expo/vector-icons";

interface Movie {
  id: string;
  title: string;
  genre: string;
  releaseDate: any;
  posterUrl: string;
  rating: string;
}

const MovieListScreen = ({ route, navigation }: any) => {
  const { type = "now-showing", title = "Movies" } = route.params || {};
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const moviesSnapshot = await getDocs(collection(db, "movies"));
      let moviesData = moviesSnapshot.docs.map((doc) => ({
        ...(doc.data() as Movie),
        id: doc.id,
      }));

      // Filter by type
      const getDateValue = (dateInput: any): number => {
        if (!dateInput) return 0;
        try {
          if (dateInput && typeof dateInput.toDate === "function") {
            return dateInput.toDate().getTime();
          }
          if (dateInput instanceof Date) {
            return dateInput.getTime();
          }
          if (typeof dateInput === "string") {
            return new Date(dateInput).getTime();
          }
          if (typeof dateInput === "number") {
            return dateInput;
          }
          return 0;
        } catch (error) {
          return 0;
        }
      };

      const now = new Date().getTime();

      if (type === "now-showing") {
        moviesData = moviesData.filter((movie) => {
          const movieDate = getDateValue(movie.releaseDate);
          return movieDate <= now;
        });
      } else if (type === "coming-soon") {
        moviesData = moviesData.filter((movie) => {
          const movieDate = getDateValue(movie.releaseDate);
          return movieDate > now;
        });
      }

      // Sort by release date (newest first)
      moviesData.sort((a, b) => {
        const dateAValue = getDateValue(a.releaseDate);
        const dateBValue = getDateValue(b.releaseDate);
        return dateBValue - dateAValue;
      });

      setMovies(moviesData);
      setFilteredMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.genre?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchMovies();
  };

  const handleMoviePress = (movieId: string) => {
    navigation.navigate("MovieDetail", { movieId });
  };

  const formatReleaseDate = (releaseDate: any) => {
    try {
      if (releaseDate) {
        if (typeof releaseDate.toDate === "function") {
          return releaseDate.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        } else if (releaseDate instanceof Date) {
          return releaseDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        } else if (typeof releaseDate === "string") {
          return new Date(releaseDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        }
      }
    } catch (error) {
      console.error("Date formatting error:", error);
    }
    return "Unknown date";
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => handleMoviePress(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.posterContainer}>
        {item.posterUrl && (
          <Image
            source={{ uri: item.posterUrl }}
            style={styles.moviePoster}
            resizeMode="cover"
          />
        )}
        {!item.posterUrl && (
          <View style={styles.placeholderPoster}>
            <Ionicons name="image-outline" size={40} color="#ccc" />
          </View>
        )}
      </View>
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.movieGenre} numberOfLines={1}>
          {item.genre}
        </Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating || "N/A"}</Text>
          <Text style={styles.releaseDateText}>
            • {formatReleaseDate(item.releaseDate)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        ) : null}
      </View>

      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <View style={styles.centerContainer}>
          <Ionicons name="film-outline" size={50} color="#ccc" />
          <Text style={styles.noMoviesText}>
            {searchQuery ? "No movies found" : "No movies available"}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#121212",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    height: 44,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  movieCard: {
    flexDirection: "row",
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
  },
  posterContainer: {
    width: 120,
    height: 160,
    backgroundColor: "#1a1a1a",
  },
  moviePoster: {
    width: "100%",
    height: "100%",
  },
  placeholderPoster: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  movieInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  movieGenre: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: "#FFD700",
    fontWeight: "600",
  },
  releaseDateText: {
    fontSize: 11,
    color: "#666",
  },
  noMoviesText: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 12,
  },
});

export default MovieListScreen;
