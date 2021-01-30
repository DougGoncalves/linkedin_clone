import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDc9CZIvcu5Ow9-8Is9bR16Nol1k86uVvY",
  authDomain: "linkedin-clone-3855f.firebaseapp.com",
  projectId: "linkedin-clone-3855f",
  storageBucket: "linkedin-clone-3855f.appspot.com",
  messagingSenderId: "33225674759",
  appId: "1:33225674759:web:ba6cafda4d0da93c081aa2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };