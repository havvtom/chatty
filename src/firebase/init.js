import firebase from 'firebase';
import firestore from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCq_hinHJPyxkyri3BY0OpShRmYT5ERM0I",
    authDomain: "chatty-3f77d.firebaseapp.com",
    databaseURL: "https://chatty-3f77d.firebaseio.com",
    projectId: "chatty-3f77d",
    storageBucket: "chatty-3f77d.appspot.com",
    messagingSenderId: "865925356591",
    appId: "1:865925356591:web:4211fc632e2d0ef257bada",
    measurementId: "G-JP09QM7J2K"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebaseApp.firestore();