// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMrxSraeDcz38rs4mogGlZQOHcz-U3Q1M",
    authDomain: "react-a007a.firebaseapp.com",
    projectId: "react-a007a",
    storageBucket: "react-a007a.appspot.com",
    messagingSenderId: "792891084763",
    appId: "1:792891084763:web:6d693f428be4c11d3421fe",
    measurementId: "G-7QNR34V7DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
