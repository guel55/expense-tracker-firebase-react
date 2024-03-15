// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDieWg4E2Ix_gVsPAWv7uDo_Eh4SZnpvug",
  authDomain: "expense-tracker-20c08.firebaseapp.com",
  projectId: "expense-tracker-20c08",
  storageBucket: "expense-tracker-20c08.appspot.com",
  messagingSenderId: "1017000329191",
  appId: "1:1017000329191:web:872d39b1ce9538ef0f8742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy