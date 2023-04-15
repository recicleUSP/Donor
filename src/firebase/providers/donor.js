import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { Firestore, Auth } from "../config/connection";
import * as Types from "../../contexts/donor/types";
import P from 'prop-types';


const Sign = async (data, dispach) => { 
  
  createUserWithEmailAndPassword(Auth, data.email, data.pass)
  .then(async (userCredential) => {
    
    const user = userCredential.user;
    
    delete data.pass;
    delete data.id;
    delete data.logged;
    
    try {
        await setDoc(doc(Firestore, "donor", user.uid), data);
        dispach({type: Types.SETLOGGED, payload: {id: user.uid}});          
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  })
}
Sign.propTypes = {
  data: P.instanceOf(Map).isRequired,
  dispach: P.func.isRequired
}


async function Login(data, dispach) {
  signInWithEmailAndPassword(Auth, data.email, data.pass)
  .then(async (userCredential) => {
    const ref  = userCredential.user;
    const user = await getDoc(doc(Firestore, 'donor', ref.uid));

    console.log("USER: >> ", );
    dispach({type: Types.SETLOGGED, payload: {...user.data(), id: ref.uid}});    
  })
}
Login.propTypes = {
  data: P.instanceOf(Map).isRequired,
  dispach: P.func.isRequired
}

async function LoginWithGoogle(dispach) {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(Auth, provider);

  getRedirectResult(Auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log("\n\nToken: ", token);
    console.log("\n\nUser: ", user);

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
Login.propTypes = {
  dispach: P.func.isRequired
}

export {Sign, Login, LoginWithGoogle};

