// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe5Gu_LYvfZQziuB5gBh68apM6-cO-DXQ",
  authDomain: "user-management-system-36579.firebaseapp.com",
  projectId: "user-management-system-36579",
  storageBucket: "user-management-system-36579.firebasestorage.app",
  messagingSenderId: "642503876428",
  appId: "1:642503876428:web:2befe3169311cc872e39e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

