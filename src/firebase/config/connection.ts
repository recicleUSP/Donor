import AsyncStorage from "@react-native-async-storage/async-storage";
import {firebaseConfig} from '../../constants/firebase'
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import {initializeApp} from "firebase/app";

const app       = initializeApp(firebaseConfig);
const Firestore = getFirestore(app);
const Auth      = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});   

export {Firestore, Auth};