import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeq__ksFUmPpFGWfSAy_gDZGcEvVl4304",
  authDomain: "whatsapp-clone-f5592.firebaseapp.com",
  projectId: "whatsapp-clone-f5592",
  storageBucket: "whatsapp-clone-f5592.appspot.com",
  messagingSenderId: "642797646101",
  appId: "1:642797646101:web:4172796793b9d166c9b91c",
  measurementId: "G-S3WX9VMRWT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
