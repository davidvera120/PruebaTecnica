// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmKfun2TS9brmpbNG1e42TweIRR74l744",
  authDomain: "auth-test-app-8a172.firebaseapp.com",
  projectId: "auth-test-app-8a172",
  storageBucket: "auth-test-app-8a172.appspot.com",
  messagingSenderId: "690424995011",
  appId: "1:690424995011:web:761d5cfa81cee8c2375676",
  measurementId: "G-Y0652D8R6D"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider= new FacebookAuthProvider();
export const db = getFirestore(app);