// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi1LQ1QIHF3tOzW4sjSyvVAcQgZqpVNSk",
  authDomain: "sparta-react-homework.firebaseapp.com",
  projectId: "sparta-react-homework",
  storageBucket: "sparta-react-homework.appspot.com",
  messagingSenderId: "1044039670042",
  appId: "1:1044039670042:web:66bfd6a5b754844b6cf4a3",
  measurementId: "G-FS7BNB4Y9V"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);



export const db = getFirestore();