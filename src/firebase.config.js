// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqwMYSnDGXuNO3RpeakaU8Ypos5c1kCUM",
  authDomain: "house-marketplace-app-a0798.firebaseapp.com",
  projectId: "house-marketplace-app-a0798",
  storageBucket: "house-marketplace-app-a0798.appspot.com",
  messagingSenderId: "479740664498",
  appId: "1:479740664498:web:b773e8c62179cb3cdcc7ab"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();