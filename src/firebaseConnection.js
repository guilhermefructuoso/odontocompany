import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDSE94sROC6iuC5x7exHRRCZkQO6i6OxA4",
  authDomain: "odontocompany-santos.firebaseapp.com",
  projectId: "odontocompany-santos",
  storageBucket: "odontocompany-santos.appspot.com",
  messagingSenderId: "903808179223",
  appId: "1:903808179223:web:c120d661ab7100ad721052",
  measurementId: "G-QKLTH4R11E"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export default firebase

