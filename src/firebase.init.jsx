// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbf_ZYBDBupdqlt2L2mPGOshBlkn2MBiE",
  authDomain: "to-do-app-512d4.firebaseapp.com",
  projectId: "to-do-app-512d4",
  storageBucket: "to-do-app-512d4.appspot.com",
  messagingSenderId: "602680052477",
  appId: "1:602680052477:web:dac526440dfcd45fcccc94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
