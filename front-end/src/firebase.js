// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-91d59.firebaseapp.com",
  projectId: "mern-blog-91d59",
  storageBucket: "mern-blog-91d59.appspot.com",
  messagingSenderId: "873752076153",
  appId: "1:873752076153:web:cedf90875fa9e4ee1219a8",
  measurementId: "G-H3KHVF9M7Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
