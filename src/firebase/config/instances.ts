import { getFirestore } from "firebase/firestore"; 
import { firebase }     from "./connection";

const firestore = getFirestore(firebase.getApp());


export {firestore};