// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg5ja4Bi6_KJyD1N_mS9uZA09SuSHNvLQ",
  authDomain: "therelimits.firebaseapp.com",
  projectId: "therelimits",
  storageBucket: "therelimits.appspot.com",
  messagingSenderId: "144409093764",
  appId: "1:144409093764:web:87a008c3a38c1fddacc4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => { return app }

export const getFirestoreDB = () => { return getFirestore(app) }