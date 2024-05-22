// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "marketplace-5b958.firebaseapp.com",
    projectId: "marketplace-5b958",
    storageBucket: "marketplace-5b958.appspot.com",
    messagingSenderId: "613024803761",
    appId: "1:613024803761:web:15d1525590bbc580246b90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);