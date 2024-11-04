import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoscIAxxuG7pYSBDyMpTqGXwX4EGW_N90",
  authDomain: "rvl-engine-docs.firebaseapp.com",
  projectId: "rvl-engine-docs",
  storageBucket: "rvl-engine-docs.firebasestorage.app",
  messagingSenderId: "20895076993",
  appId: "1:20895076993:web:2930ebf79352c9978bf380",
  measurementId: "G-05NL2WRTZJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionID = "tutorials";
export const auth = getAuth(app);
