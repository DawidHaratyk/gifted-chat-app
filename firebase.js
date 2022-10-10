// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLzct2susafx2tehN8lNdCZdgdzqotfMs",
  authDomain: "socializing-app-ac20d.firebaseapp.com",
  databaseURL: "https://socializing-app-ac20d-default-rtdb.firebaseio.com",
  projectId: "socializing-app-ac20d",
  storageBucket: "socializing-app-ac20d.appspot.com",
  messagingSenderId: "41571108076",
  appId: "1:41571108076:web:66a212748b91ad43da11c9",
  measurementId: "G-PFN7VXH62N",
};

// Initialize Firebase
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

export { firebase };
