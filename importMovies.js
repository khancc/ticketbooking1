const admin = require('firebase-admin');
const fs = require('fs');
const csv = require('csv-parser');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // You'll need to download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Helper function to parse custom date format
function parseCustomDate(dateString) {
  if (!dateString) return null;
  
  // Format: "December 24, 2025 at 1:00:00 PM UTC+7"
  // Remove " at " and " UTC+7" to make it parseable
  const cleanedDate = dateString.replace(' at ', ' ').replace(/ UTC\+\d+/, '');
  const date = new Date(cleanedDate);
  
  // Validate the date
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date format: ${dateString}`);
    return null;
  }
  
  return admin.firestore.Timestamp.fromDate(date);
}

// Function to parse CSV and upload to Firestore
async function importMovies() {
  const movies = [];

  // Read and parse CSV file
  fs.createReadStream('imdb_data_transformed.csv')
    .pipe(csv())
    .on('data', (row) => {
      // Transform CSV row to movie object
      const movie = {
        title: row.title,
        rating: parseFloat(row.rating),
        duration: row.duration ? parseInt(row.duration) : 0,
        genre: row.genre,
        synopsis: row.synopsis,
        director: row.director,
        cast: row.cast,
        posterUrl: row.posterUrl,
        trailerUrl: row.trailerUrl,
        releaseDate: parseCustomDate(row.releaseDate),
        endDate: parseCustomDate(row.endDate)
      };
      movies.push(movie);
    })
    .on('end', async () => {
      console.log(`CSV file successfully processed. Found ${movies.length} movies.`);
      
      // Upload to Firestore in batches (Firestore batch limit is 500)
      const batchSize = 500;
      let successCount = 0;
      let errorCount = 0;

      for (let i = 0; i < movies.length; i += batchSize) {
        const batch = db.batch();
        const chunk = movies.slice(i, i + batchSize);

        chunk.forEach((movie) => {
          const docRef = db.collection('movies').doc(); // Auto-generate ID
          batch.set(docRef, movie);
        });

        try {
          await batch.commit();
          successCount += chunk.length;
          console.log(`Batch ${Math.floor(i / batchSize) + 1}: Uploaded ${chunk.length} movies successfully.`);
        } catch (error) {
          errorCount += chunk.length;
          console.error(`Error uploading batch ${Math.floor(i / batchSize) + 1}:`, error);
        }
      }

      console.log(`\n=== Import Complete ===`);
      console.log(`Total movies: ${movies.length}`);
      console.log(`Successfully uploaded: ${successCount}`);
      console.log(`Failed: ${errorCount}`);
      
      process.exit(0);
    })
    .on('error', (error) => {
      console.error('Error reading CSV file:', error);
      process.exit(1);
    });
}

// Run the import
importMovies().catch((error) => {
  console.error('Import failed:', error);
  process.exit(1);
});
