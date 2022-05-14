import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  APPID,
  MEASUREID,
  AUTHDOMAIN,
  FIREKEY,
  MESSAGING_SENDER_ID,
  STORAGE_BUCKET,
  PROJECT_ID,
} from "./fireKeys";

const firebaseConfig = {
  apiKey: FIREKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APPID,
  measurementId: MEASUREID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
