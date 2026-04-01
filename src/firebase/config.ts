import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// OPTIONAL (only if you need analytics)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkHhYQApEHeh2uMuv_iTBsIp0-Z1iq8Tc",
  authDomain: "billing-app-8d81b.firebaseapp.com",
  projectId: "billing-app-8d81b",

};

// Initialize Firebase ONLY ONCE
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Optional
//export const analytics = getAnalytics(app);