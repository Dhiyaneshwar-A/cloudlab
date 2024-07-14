import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDbOY0lNlKuN7EXfuvFM_Ph93pM7jusanA",
  authDomain: "authentication-6684b.firebaseapp.com",
  projectId: "authentication-6684b",
  storageBucket: "authentication-6684b.appspot.com",
  messagingSenderId: "877078853318",
  appId: "1:877078853318:web:001d14095f95b8ef4f49c7",
  measurementId: "G-D0LKV3BJ9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
