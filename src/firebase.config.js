import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsd5Han4kUsc8hlrHGaep-kPboRAJb2sI",
  authDomain: "house-marketplace-app-ab6ed.firebaseapp.com",
  projectId: "house-marketplace-app-ab6ed",
  storageBucket: "house-marketplace-app-ab6ed.appspot.com",
  messagingSenderId: "49751187278",
  appId: "1:49751187278:web:45f8569b7fe7a9c330c81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()