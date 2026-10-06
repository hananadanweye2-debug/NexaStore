import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOUh3ROmcscqlmqrWbdbfbVaVZSsXIrww",
  authDomain: "nexastore-55a4c.firebaseapp.com",
  projectId: "nexastore-55a4c",
  storageBucket: "nexastore-55a4c.appspot.com",
  messagingSenderId: "295407285824",
  appId: "1:295407285824:web:3c6962219f33ae98ba91a5",
  measurementId: "G-FGQ1H0WC0M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();