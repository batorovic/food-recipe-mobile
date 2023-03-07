import { REACT_APP_FIREBASE_KEY } from "@env";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth, signOut } from "firebase/auth";
import {
  addDoc,
  arrayRemove,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "recipe-app-c5434.firebaseapp.com",
  projectId: "recipe-app-c5434",
  storageBucket: "recipe-app-c5434.appspot.com",
  messagingSenderId: "216766024843",
  appId: "1:216766024843:web:54a06446fe1a23e8d8588e",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);