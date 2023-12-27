
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCqj5S_zfa2b9nOV9cpDTGAANrPwJb9l9I",
  authDomain: "myipr-e93ec.firebaseapp.com",
  projectId: "myipr-e93ec",
  storageBucket: "myipr-e93ec.appspot.com",
  messagingSenderId: "719724872515",
  appId: "1:719724872515:web:f81f4d25c1a36cc2de65f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;