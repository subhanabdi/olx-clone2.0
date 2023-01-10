import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyCxZN1GmmfX1MakSg_bgNMksvh9FvnpusE",

  authDomain: "olx-clone-f03f5.firebaseapp.com",

  projectId: "olx-clone-f03f5",

  storageBucket: "olx-clone-f03f5.appspot.com",

  messagingSenderId: "446958169037",

  appId: "1:446958169037:web:a09199879a3a380a457284"

};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;