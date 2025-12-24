import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArX-5wlWcaDMl3SpsAmN0WF2eLn2MoHus",
  authDomain: "ticketbooking1-132b4.firebaseapp.com",
  projectId: "ticketbooking1-132b4",
  storageBucket: "ticketbooking1-132b4.firebasestorage.app",
  messagingSenderId: "911395033758",
  appId: "1:911395033758:web:fb6bde59d17c34a03fe18f",
  measurementId: "G-Q6H3S8B4BL",
};

// Initialize Firebase - only if not already initialized
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
