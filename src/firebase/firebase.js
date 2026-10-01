import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALYGKOUg36Rrp0l5ZcwNYcYA1bDr6kMfQ",
  authDomain: "momentum-7cff8.firebaseapp.com",
  projectId: "momentum-7cff8",
  storageBucket: "momentum-7cff8.firebasestorage.app",
  messagingSenderId: "928736184668",
  appId: "1:928736184668:web:9ec3159196e902ee8bd999",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
