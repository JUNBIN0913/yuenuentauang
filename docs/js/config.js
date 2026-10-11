// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASsXQVcidGSpz1_h8bNcsx6e3OR81f9A8",
  authDomain: "yuenuentauang.firebaseapp.com",
  projectId: "yuenuentauang",
  storageBucket: "yuenuentauang.firebasestorage.app",
  messagingSenderId: "581495775273",
  appId: "1:581495775273:web:6ece189e95a5c59e873c38",
  measurementId: "G-CT9CRWHRHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
