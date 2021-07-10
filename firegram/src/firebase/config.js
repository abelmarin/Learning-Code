import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9zC96IO0u9EYImR9XvANms80IgiQ7Q8U",
  authDomain: "ninja-firegram-a370d.firebaseapp.com",
  projectId: "ninja-firegram-a370d",
  storageBucket: "ninja-firegram-a370d.appspot.com",
  messagingSenderId: "146367149839",
  appId: "1:146367149839:web:5a34915dc763681511b07a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }