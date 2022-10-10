import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLzct2susafx2tehN8lNdCZdgdzqotfMs",
  authDomain: "socializing-app-ac20d.firebaseapp.com",
  databaseURL: "https://socializing-app-ac20d-default-rtdb.firebaseio.com",
  projectId: "socializing-app-ac20d",
  storageBucket: "socializing-app-ac20d.appspot.com",
  messagingSenderId: "41571108076",
  appId: "1:41571108076:web:dc06a576e84c17ceda11c9",
  measurementId: "G-71VX6084PE",
};

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// firebase.initializeApp(firebaseConfig);

const app = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

export { firebase, app };
