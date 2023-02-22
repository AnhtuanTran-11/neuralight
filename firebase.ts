import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhTAWqUk83uulhfMXX8ZxLCXP8K7kHo-o",
  authDomain: "neuralight-ai.firebaseapp.com",
  projectId: "neuralight-ai",
  storageBucket: "neuralight-ai.appspot.com",
  messagingSenderId: "386064873738",
  appId: "1:386064873738:web:99004ecc8c72232733a2f3",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
