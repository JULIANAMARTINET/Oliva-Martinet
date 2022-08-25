import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDR8ZzjJOttbY-U6VWzKYNY9Hf8v7mWlE",
  authDomain: "oliva-5cfe3.firebaseapp.com",
  projectId: "oliva-5cfe3",
  storageBucket: "oliva-5cfe3.appspot.com",
  messagingSenderId: "382665704112",
  appId: "1:382665704112:web:3e4474b568373de7883175"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


