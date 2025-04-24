import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADYpf9GlQZe-9_CEd0cO5xm3h-04AWkzQ",
  authDomain: "vargas-y-asociados.firebaseapp.com",
  projectId: "vargas-y-asociados",
  storageBucket: "vargas-y-asociados.firebasestorage.app",
  messagingSenderId: "945240380988",
  appId: "1:945240380988:web:1a9b59e8054de3bd115539",
  measurementId: "G-6TCT5N5TLX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
