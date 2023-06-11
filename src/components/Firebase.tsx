// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYFXg4WfKJYwlD0lUOALpJksSKYHDYx-I",
  authDomain: "carefinder-68614.firebaseapp.com",
  projectId: "carefinder-68614",
  storageBucket: "carefinder-68614.appspot.com",
  messagingSenderId: "433599252416",
  appId: "1:433599252416:web:a43ffb15a78b8fb7fcea25",
  measurementId: "G-W3C0FWXDCZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

export { firestore, auth };
