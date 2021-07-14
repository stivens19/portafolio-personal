import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzJX7aBoyBaQ6TAQ5H7CtOdr03dGiKvKg",
    authDomain: "portfoliobase-db0ac.firebaseapp.com",
    projectId: "portfoliobase-db0ac",
    storageBucket: "portfoliobase-db0ac.appspot.com",
    messagingSenderId: "23256505987",
    appId: "1:23256505987:web:7c770d33b9dcd56be805b6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const auth=firebase.auth();

export {
    db,
    auth
}