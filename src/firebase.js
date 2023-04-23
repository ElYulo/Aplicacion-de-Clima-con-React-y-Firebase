// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC-8zNFnsvT76Losz4yUZFlZ7mOuopWdg",
    authDomain: "notificacion-b12d4.firebaseapp.com",
    projectId: "notificacion-b12d4",
    storageBucket: "notificacion-b12d4.appspot.com",
    messagingSenderId: "125474800292",
    appId: "1:125474800292:web:c45a55712acebdfa151c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);