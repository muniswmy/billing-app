import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_Wc22PyEi-ARe03wQhXqu5rme7zzVQkA",
  authDomain: "billing-app-e8964.firebaseapp.com",
  projectId: "billing-app-e8964",
  storageBucket: "billing-app-e8964.firebasestorage.app",
  messagingSenderId: "505064257041",
  appId: "1:505064257041:web:6e3f5e23808d66ea0263b0",
  measurementId: "G-ZJK8LQ8ZWJ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);