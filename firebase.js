import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDMcu3QDRUY3QpxDRQszQzFI8b_Qo-IilM",
  authDomain: "clonne-df407.firebaseapp.com",
  projectId: "clonne-df407",
  storageBucket: "clonne-df407.appspot.com",
  messagingSenderId: "40431704558",
  appId: "1:40431704558:web:61b351a03d9973839a96ff",
  measurementId: "G-W05BVCJ46L"
});

const auth = firebase.auth();

export { auth };