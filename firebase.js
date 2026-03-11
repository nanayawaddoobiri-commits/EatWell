import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByb3blMjWpcpvsN0nMTVqnLNHR7YIDDpA",
  authDomain: "fitness-tracker-a07d5.firebaseapp.com",
  projectId: "fitness-tracker-a07d5",
  storageBucket: "fitness-tracker-a07d5.firebasestorage.app",
  messagingSenderId: "128680029954",
  appId: "1:128680029954:web:7e309c3fbfac2838505c1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);