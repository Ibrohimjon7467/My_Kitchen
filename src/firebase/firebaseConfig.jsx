import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCh4a1_4uEksWE5wQDAPZHBCZqaEwnHaSc",
    authDomain: "my-kitchen-ibr.firebaseapp.com",
    projectId: "my-kitchen-ibr",
    storageBucket: "my-kitchen-ibr.appspot.com",
    messagingSenderId: "74323930262",
    appId: "1:74323930262:web:52f14064a129be5604e6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth()