import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCbG3956HR4zMdlRP-BFtUaudeeXqyq78M',
  authDomain: 'file-upload-5d3ba.firebaseapp.com',
  projectId: 'file-upload-5d3ba',
  storageBucket: 'file-upload-5d3ba.appspot.com',
  messagingSenderId: '533502614265',
  appId: '1:533502614265:web:d2b311e8e499f5da47e028',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
