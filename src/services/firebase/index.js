import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDbkTdqUTjmOi8xxS7rBnk-8bLAd66DtEI",
    authDomain: "tienda31190.firebaseapp.com",
    projectId: "tienda31190",
    storageBucket: "tienda31190.appspot.com",
    messagingSenderId: "414768081193",
    appId: "1:414768081193:web:8a5b4fb87c305c8188ef38",
    measurementId: "G-FCHD52KLW7"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)

