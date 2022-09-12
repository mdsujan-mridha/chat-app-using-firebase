import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4KXyON82CjZy5z35Zg5DeJLFibejLm9A",
  authDomain: "mern-chat-fceaa.firebaseapp.com",
  projectId: "mern-chat-fceaa",
  storageBucket: "mern-chat-fceaa.appspot.com",
  messagingSenderId: "244999204672",
  appId: "1:244999204672:web:8d747ca9028ae0e8e814a5"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
