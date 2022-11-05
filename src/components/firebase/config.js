import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQu1aVG2RyFxpdO1yDGzNtL0LJ1uSFeI4",
  authDomain: "users-56b99.firebaseapp.com",
  projectId: "users-56b99",
  storageBucket: "users-56b99.appspot.com",
  messagingSenderId: "253023250728",
  appId: "1:253023250728:web:8a823976db411bca5b881d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init service firestore
export const db = getFirestore(app);
export const auth = getAuth(app);