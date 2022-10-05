import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsBOf68OFyUriTDyFW6Z-XWenTYN80VYY",
  authDomain: "el-triangulo-dd0c2.firebaseapp.com",
  projectId: "el-triangulo-dd0c2",
  storageBucket: "el-triangulo-dd0c2.appspot.com",
  messagingSenderId: "136223740849",
  appId: "1:136223740849:web:f6b7e7d5c5b049a4aba390"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)