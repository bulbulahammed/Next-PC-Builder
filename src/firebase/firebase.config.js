// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiudO8nKH4xJXB1DKGIFMSbdRufxbL4pM",
  authDomain: "next-auth-407711.firebaseapp.com",
  projectId: "next-auth-407711",
  storageBucket: "next-auth-407711.appspot.com",
  messagingSenderId: "1030036104822",
  appId: "1:1030036104822:web:41cc13e3e356009968e157",
  measurementId: "G-2H0PWT479E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;