// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-navigator-c6df0.firebaseapp.com",
  projectId: "property-navigator-c6df0",
  storageBucket: "property-navigator-c6df0.appspot.com",
  messagingSenderId: "120837979325",
  appId: "1:120837979325:web:32f859ecace615fe500bd4",
  measurementId: "G-6ZENY0E990",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
