import { Firestore, Auth } from "../config/connection";
import { VerifyErroCode } from "../config/errors";
import * as Types from "../../contexts/donor/types";
import { Storage } from "../config/connection";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import P from 'prop-types';
import { firebaseConfig } from "../../constants/firebase";
import { setDoc, getDoc, collection , addDoc, getFirestore, firebaseApp } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

// const firestore = getFirestore(firebaseApp);

// async function addNewDocument() {
//     const navigation = useNavigation();
//     try {
//       const newDocRef = await addDoc(collection(firestore, 'recycling'), {
//         tipo: 'Plástico',
//         caixas: 2,
//         coleta: 'Semanal',
//         endereco: 'Rua da Reciclagem, 123',
//         observacao: 'Deixar na portaria',
//         peso: 5.2,
//         sacolas: 1,
//       });
//       console.log('Documento adicionado com ID:', newDocRef.id);
//       navigation.navigate('Home')
//     } catch (error) {
//       console.error('Erro ao adicionar documento:', error);
//     }
// }

// export {addNewDocument};