// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtTTI0GVa3xmbW4kwnTvBgCfqEdlUf00E",
  authDomain: "chef-recipe-hunter-8e4c1.firebaseapp.com",
  projectId: "chef-recipe-hunter-8e4c1",
  storageBucket: "chef-recipe-hunter-8e4c1.appspot.com",
  messagingSenderId: "220840487056",
  appId: "1:220840487056:web:e44838ecd0057271ce5015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;