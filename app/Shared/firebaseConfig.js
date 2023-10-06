// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSF6299GivdR_Mpdpp2ti-HZUEmh41V8M",
  authDomain: "locterest.firebaseapp.com",
  projectId: "locterest",
  storageBucket: "locterest.appspot.com",
  messagingSenderId: "939614899778",
  appId: "1:939614899778:web:97c9508657ba5a284a67db",
  measurementId: "G-XQDRP0QKQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;