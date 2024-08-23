// src/utils/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqA2GoF1o6NQcQq1YFAgq4M80ux_qcVRA",
    authDomain: "wedding-1c62f.firebaseapp.com",
    projectId: "wedding-1c62f",
    storageBucket: "wedding-1c62f.appspot.com",
    messagingSenderId: "16656554555",
    appId: "1:16656554555:web:0c86162f678b930b84da1e"
    // measurementId: "G-GMZWRQY282",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, signInWithEmailAndPassword };
