import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBlfkEZJO7kMV8BlfVrmqDXBePpTmYUnGA",
    authDomain: "basedato-42d96.firebaseapp.com",
    projectId: "basedato-42d96",
    storageBucket: "basedato-42d96.appspot.com",
    messagingSenderId: "71189514137",
    appId: "1:71189514137:web:27586c5fc512a5feec3508",
    measurementId: "G-TCRS9THE1X"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)