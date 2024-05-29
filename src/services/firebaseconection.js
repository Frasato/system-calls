import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const dataBase = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {
    auth,
    dataBase,
    storage
}