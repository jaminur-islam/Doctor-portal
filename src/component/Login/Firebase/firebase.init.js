import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthinit = () =>{
const app = initializeApp(firebaseConfig);
}

export default firebaseAuthinit;