// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmu2JkWJ9fRHcLlcI0kqKaGc1FfRbk4wE",
  authDomain: "react-disney-plus-app-9c2c2.firebaseapp.com",
  projectId: "react-disney-plus-app-9c2c2",
  storageBucket: "react-disney-plus-app-9c2c2.appspot.com",
  messagingSenderId: "290222589163",
  appId: "1:290222589163:web:09c1f7b50cbf1cfc22eaae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
