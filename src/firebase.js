import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8SnF5U5iZn-pfUQZeYnr3D8B8WI9tGJc",
  authDomain: "clone-c2793.firebaseapp.com",
  projectId: "clone-c2793",
  storageBucket: "clone-c2793.appspot.com",
  messagingSenderId: "908520008450",
  appId: "1:908520008450:web:5c6ce511b8f8e174bf301b",
  measurementId: "G-XHZKFWYYNB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =  firebase.auth()

export { db, auth};