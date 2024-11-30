// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_API_KEY=import.meta.env.VITE_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN=import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID=import.meta.env.VITE_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET=import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_ID=import.meta.env.VITE_FIREBASE_MESSAGEING_SENDER_ID;
const FIREBASE_APP_ID=import.meta.env.VITE_FIREBASE_APP_ID;
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);