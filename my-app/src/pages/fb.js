import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDMrxSraeDcz38rs4mogGlZQOHcz-U3Q1M",
    authDomain: "react-a007a.firebaseapp.com",
    projectId: "react-a007a",
    storageBucket: "react-a007a.appspot.com",
    messagingSenderId: "792891084763",
    appId: "1:792891084763:web:6d693f428be4c11d3421fe",
    measurementId: "G-7QNR34V7DM"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
