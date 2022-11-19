import firebase from 'firebase/app';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMt9Pv93lssjTFsyVZJSfcVFiWvMmIwrs",
  authDomain: "fungi-c58f7.firebaseapp.com",
  projectId: "fungi-c58f7",
  storageBucket: "fungi-c58f7.appspot.com",
  messagingSenderId: "695101709115",
  appId: "1:695101709115:web:4ecc7425dd86c0f132751e"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}