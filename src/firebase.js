import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDljp7g4Nv9UkJcajGaO3ai3KIItM6gF1s",
    authDomain: "netflix-clone-8254d.firebaseapp.com",
    projectId: "netflix-clone-8254d",
    storageBucket: "netflix-clone-8254d.appspot.com",
    messagingSenderId: "130441881206",
    appId: "1:130441881206:web:fe290f1c95733c2f116157"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };