import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6RB2Wj_kyRT-NLftUz9DbakkILNN2PVU",
  authDomain: "ecommerce-page-3747e.firebaseapp.com",
  projectId: "ecommerce-page-3747e",
  storageBucket: "ecommerce-page-3747e.appspot.com",
  messagingSenderId: "213318314347",
  appId: "1:213318314347:web:4760e9e05a78b79d31842e",
  measurementId: "G-3015X61E80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };