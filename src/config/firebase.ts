import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
