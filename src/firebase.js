import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHoruHz4JKnPNgacTUiA9Y3WzpKdP2h-c",
  authDomain: "whatsapp-clone-615c2.firebaseapp.com",
  projectId: "whatsapp-clone-615c2",
  storageBucket: "whatsapp-clone-615c2.appspot.com",
  messagingSenderId: "997363453742",
  appId: "1:997363453742:web:0b4877bc6ba81f47eb74bf",
  measurementId: "G-7XHKTWQY2F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
