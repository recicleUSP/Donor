import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from "../config/instances";
import { SignData } from "../instances/donor"

async function Sign(data:SignData) {
    try {
        const docRef = await addDoc(collection(firestore, "donor"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}