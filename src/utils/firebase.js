// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0xZZ4NGKpuNEX4DwyUnLH0Kcv6U22aPs",
  authDomain: "netflix-gpt-7f9a1.firebaseapp.com",
  projectId: "netflix-gpt-7f9a1",
  storageBucket: "netflix-gpt-7f9a1.appspot.com",
  messagingSenderId: "164800082382",
  appId: "1:164800082382:web:7e64b840edc4df391e7b9f",
  measurementId: "G-HW97JNS45N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();