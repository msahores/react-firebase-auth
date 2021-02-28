import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
});

export default firebaseApp;