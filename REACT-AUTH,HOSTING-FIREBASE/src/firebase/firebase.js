import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvrPYWSFynFYqOMYAj6BMli42f4oMjyL0",
  authDomain: "auth-react-4964d.firebaseapp.com",
  projectId: "auth-react-4964d",
  storageBucket: "auth-react-4964d.appspot.com",
  messagingSenderId: "479326598001",
  appId: "1:479326598001:web:074b4f08e23c1d22073cd0",
  measurementId: "G-0BGNXN4TSE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
