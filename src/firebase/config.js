import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore' /** permitirá obtener la base de datos de firestor */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv4BV33PX2efq6oVY4_i-l4qu4hiznYCQ",
  authDomain: "santarita-db.firebaseapp.com",
  projectId: "santarita-db",
  storageBucket: "santarita-db.firebasestorage.app",
  messagingSenderId: "304789906643",
  appId: "1:304789906643:web:fcf9cb53a1da9e85612026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/** representaremos a nuestra base de datos en una constante, y como
queremos usar esta bd desde otros archivos, vamos a exportarla. */
export const db = getFirestore(app)