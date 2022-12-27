import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_l3O-ev-Do34cfFfTcUVhIuzYoyXxw8k",
    authDomain: "mamontenok-6c8f6.firebaseapp.com",
    projectId: "mamontenok-6c8f6",
    storageBucket: "mamontenok-6c8f6.appspot.com",
    messagingSenderId: "897871137349",
    appId: "1:897871137349:web:d88c4510136bbe7fb8312c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;