// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPZIW_ndszglBZRJbw-cQC-g7XD3M6OJ8",
  authDomain: "bd-projetofirebase.firebaseapp.com",
  projectId: "bd-projetofirebase",
  storageBucket: "bd-projetofirebase.firebasestorage.app",
  messagingSenderId: "881903152085",
  appId: "1:881903152085:web:f87e0c4e707be2656deb5c",
  measurementId: "G-4TF4MGDJZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializa o Firestore
const db = getFirestore(app);

export { db };