// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6pswKiTy-QuTax6L126JuzInElcyKuzY",
  authDomain: "email-pass-auth-learning-3.firebaseapp.com",
  projectId: "email-pass-auth-learning-3",
  storageBucket: "email-pass-auth-learning-3.appspot.com",
  messagingSenderId: "576089519053",
  appId: "1:576089519053:web:69d7f9e64c0e1bceda4a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
