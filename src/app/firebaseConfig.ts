// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCgbi84SXGmoVlQo9ATigNqbjsjLtwIx4",
  authDomain: "project-5-30059.firebaseapp.com",
  databaseURL: "https://project-5-30059-default-rtdb.firebaseio.com",
  projectId: "project-5-30059",
  storageBucket: "project-5-30059.firebasestorage.app",
  messagingSenderId: "183797207599",
  appId: "1:183797207599:web:e264007b4673044d282cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app); 