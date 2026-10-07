import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore' /** permitirá obtener la base de datos de firestor */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/** representaremos a nuestra base de datos en una constante, y como
queremos usar esta bd desde otros archivos, vamos a exportarla. */
export const db = getFirestore(app)