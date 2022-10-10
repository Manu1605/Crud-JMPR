/*INICIAMOS FIRBASE PARA PODER CONECTARNOS A SUS SERVICIOS*/ 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTztfg2JQPPAiqy-9wKexTCofUEpbbVIY",
    authDomain: "crud-7c6b0.firebaseapp.com",
    projectId: "crud-7c6b0",
    storageBucket: "crud-7c6b0.appspot.com",
    messagingSenderId: "710534755630",
    appId: "1:710534755630:web:911053e409af8891bf36bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const db=getFirestore()

export const savePar=(parti,cargaele,masap,spinp,vidam)=>
    addDoc(collection(db,'parts'),{parti,cargaele,masap,spinp,vidam})

export const getPar=()=> getDocs(collection(db,'parts'))

export const ongetPar=(callback)=> onSnapshot(collection(db, 'parts'), callback)

export const deletePar=id=>deleteDoc(doc(db, 'parts', id))

export const getParticula=id=>getDoc(doc(db, 'parts', id))

export const updatePar=(id, newCampos)=> updateDoc(doc(db, 'parts', id), newCampos)