import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tes-del-sur-test.firebaseapp.com",
  projectId: "tes-del-sur-test",
  storageBucket: "tes-del-sur-test.appspot.com",
  messagingSenderId: "609028954318",
  appId: "1:609028954318:web:6c2b7dbf6707c8a3df189f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);