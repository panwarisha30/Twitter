import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAeXhNJ4ZJiJ1v2S-zhdp8AfuUKtjb5jeY",
  authDomain: "twitter-17cf3.firebaseapp.com",
  projectId: "twitter-17cf3",
  storageBucket: "twitter-17cf3.appspot.com",
  messagingSenderId: "269622521755",
  appId: "1:269622521755:web:df192731ef7b9c86457b3e",
  measurementId: "G-N98XDVWJE5"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;