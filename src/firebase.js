// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBliZQ9X3l-NFa5dd_sjFv7PLSCN1A92Bg",
    authDomain: "linkedin-clone-ee3a9.firebaseapp.com",
    projectId: "linkedin-clone-ee3a9",
    storageBucket: "linkedin-clone-ee3a9.appspot.com",
    messagingSenderId: "375742990055",
    appId: "1:375742990055:web:c31deebb6cb7ffc8e5c442",
    measurementId: "G-GYEPWT0ZX9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };