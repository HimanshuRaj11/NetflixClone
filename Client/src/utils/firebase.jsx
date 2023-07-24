// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDx7g6l5uur9puM1bvU_FTOh9qNmD8qb_g",
  authDomain: "netflixclone-c6a9d.firebaseapp.com",
  projectId: "netflixclone-c6a9d",
  storageBucket: "netflixclone-c6a9d.appspot.com",
  messagingSenderId: "888218058409",
  appId: "1:888218058409:web:b209bbc17c36fd8de373b8",
  measurementId: "G-E7WW1MJSTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)