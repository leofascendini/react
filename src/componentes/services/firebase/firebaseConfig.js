import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC8mz9DgPPnLcPDNJMXseh3SPvT1el-XS4",
  authDomain: "reactjs-7827d.firebaseapp.com",
  projectId: "reactjs-7827d",
  storageBucket: "reactjs-7827d.appspot.com",
  messagingSenderId: "296976333305",
  appId: "1:296976333305:web:445425f145778b447fe528"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)