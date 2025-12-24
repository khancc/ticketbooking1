# Import Movies to Firestore

This guide will help you import the movie data from `imdb_data_transformed.csv` into your Firestore database.

## Prerequisites

1. **Firebase Admin SDK Service Account Key**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to Project Settings (gear icon) → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file and save it as `serviceAccountKey.json` in the project root

2. **Node.js and npm** installed on your system

## Installation Steps

### Step 1: Install Required Dependencies

```bash
npm install firebase-admin csv-parser
```

### Step 2: Add Service Account Key

Place your `serviceAccountKey.json` file in the project root directory (same folder as `package.json`).

**Important:** Make sure to add `serviceAccountKey.json` to your `.gitignore` file to avoid committing sensitive credentials.

### Step 3: Run the Import Script

```bash
node importMovies.js
```

## What the Script Does

1. Reads the `imdb_data_transformed.csv` file
2. Parses each row into a movie object
3. Uploads movies to Firestore in batches of 500 (Firestore's batch limit)
4. Adds timestamps (`createdAt` and `updatedAt`) to each movie document
5. Generates auto-IDs for each movie document

## Data Structure

Each movie document in Firestore will have the following fields:

```javascript
{
  title: string,
  rating: number,
  duration: number,
  genre: string,
  synopsis: string,
  director: string,
  cast: string,
  posterUrl: string,
  trailerUrl: string,
  releaseDate: string,
  endDate: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Troubleshooting

- **Error: Cannot find module 'firebase-admin'**: Run `npm install firebase-admin csv-parser`
- **Error: serviceAccountKey.json not found**: Make sure you've downloaded and placed the service account key in the project root
- **Permission denied**: Verify that your Firebase service account has the necessary permissions to write to Firestore

## After Import

Once the import is complete, you can verify the data in:
- Firebase Console → Firestore Database → movies collection
- Your React Native app should now be able to read and display the movies
