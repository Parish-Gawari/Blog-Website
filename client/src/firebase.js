// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bc6d5.firebaseapp.com",
  projectId: "mern-blog-bc6d5",
  storageBucket: "mern-blog-bc6d5.appspot.com",
  messagingSenderId: "982392404493",
  appId: "1:982392404493:web:0fbeaca558dd74b8fcb344",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
