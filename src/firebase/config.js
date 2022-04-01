import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAJxJxezZkD1Hb28lncmqIiredCEhSUG8M",
  authDomain: "rj-lucia.firebaseapp.com",
  projectId: "rj-lucia",
  storageBucket: "rj-lucia.appspot.com",
  messagingSenderId: "438889801201",
  appId: "1:438889801201:web:804d2784171df11b41d050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)