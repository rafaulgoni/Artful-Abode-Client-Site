import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAI-yjNrdQasHxJm7e7UC3u31nM3Vcvz80",
  authDomain: "b9a10-191bd.firebaseapp.com",
  projectId: "b9a10-191bd",
  storageBucket: "b9a10-191bd.appspot.com",
  messagingSenderId: "978293083706",
  appId: "1:978293083706:web:3213d55fab4147ae6def03"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;