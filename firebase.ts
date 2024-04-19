import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0OaKVNMTNE7YedmLTF1ADqlgoWtpdtaA",
  authDomain: "clownbot-80dc0.firebaseapp.com",
  projectId: "clownbot-80dc0",
  storageBucket: "clownbot-80dc0.appspot.com",
  messagingSenderId: "509504785211",
  appId: "1:509504785211:web:81f66e86000b9ee2aa051e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
