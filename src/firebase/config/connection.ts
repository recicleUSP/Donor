import {firebaseConfig} from '../../constants/firebase'
import firebase from "firebase/app";
import 'firebase/database';

if(!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};