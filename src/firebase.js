import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDQzjSZkg88l04fBTX5NzfiAibrZ8mtan8",
//   authDomain: "realtime-messenger-app.firebaseapp.com",
//   projectId: "realtime-messenger-app",
//   storageBucket: "realtime-messenger-app.appspot.com",
//   messagingSenderId: "426864483400",
//   appId: "1:426864483400:web:9412aa72ae899fefd24c7d",
//   measurementId: "G-6TY52KD62V"

// });

// const db = firebaseApp.firestore();

//export default db;
// import { initializeApp } from "firebase";
// import { getFirestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQzjSZkg88l04fBTX5NzfiAibrZ8mtan8",
    authDomain: "realtime-messenger-app.firebaseapp.com",
    projectId: "realtime-messenger-app",
    storageBucket: "realtime-messenger-app.appspot.com",
    messagingSenderId: "426864483400",
    appId: "1:426864483400:web:9412aa72ae899fefd24c7d",
    measurementId: "G-6TY52KD62V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;