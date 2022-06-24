import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Axios from 'axios';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey, 
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders',
  contact: 'contact'
}

// export const firebaseFunctions = require('firebase-functions')
// export const nodemailer = require('nodemailer')
// export const cors = require('cors')({
//   origin: true
// })

// export const gmailEmail = functions.config().gmail.email
// export const gmailPassword = functions.config().gmail.password

// export mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword
//   }
// })