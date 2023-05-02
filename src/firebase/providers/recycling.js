import { doc, setDoc, getDoc } from "firebase/firestore";
import { Firestore, Auth } from "../config/connection";
import { VerifyErroCode } from "../config/errors";
import * as Types from "../../contexts/donor/types";
import { Storage } from "../config/connection";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import P from 'prop-types';
import { Recycling } from "../instances/recycling";
import firebase from 'firebase';
import 'firebase/firestore';

async function RecyclingAdd() {
    const db = firebase.firestore();
    db.collection('teste').add({
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    })
    .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
    });
}

async function RecyclingUpdate() {
    const db = firebase.firestore();
    db.collection('teste').doc('docId123').update({
        name: 'Jane Doe',
        age: 35,
    })
    .then(() => {
        console.log('Document updated successfully!');
    })
    .catch((error) => {
        console.error('Error updating document:', error);
    });
}

async function RecyclingDelete() {
    const db = firebase.firestore();
    db.collection('teste').doc('docId123').delete()
    .then(() => {
    console.log('Document deleted successfully!');
    })
    .catch((error) => {
    console.error('Error deleting document:', error);
    });
}

async function RecyclingGet() {
    const db = firebase.firestore();
    db.collection('teste').doc('docId123').get()
    .then((doc) => {
    if (doc.exists) {
        console.log('Document data:', doc.data());
    } else {
        console.log('No such document!');
    }
    })
    .catch((error) => {
    console.error('Error getting document:', error);
    });
}


// CRUD

// Adiciona um novo documento a uma coleção
// db.collection('users').add({
//     name: 'John Doe',
//     age: 30,
//     email: 'johndoe@example.com'
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

// Obtém um documento por ID
// db.collection('users').doc('docId123').get()
// .then((doc) => {
//   if (doc.exists) {
//     console.log('Document data:', doc.data());
//   } else {
//     console.log('No such document!');
//   }
// })
// .catch((error) => {
//   console.error('Error getting document:', error);
// });

// Atualiza um documento por ID
// db.collection('users').doc('docId123').update({
//     name: 'Jane Doe',
//     age: 35,
//   })
//   .then(() => {
//     console.log('Document updated successfully!');
//   })
//   .catch((error) => {
//     console.error('Error updating document:', error);
//   });

// Exclui um documento por ID
// db.collection('users').doc('docId123').delete()
// .then(() => {
//   console.log('Document deleted successfully!');
// })
// .catch((error) => {
//   console.error('Error deleting document:', error);
// });