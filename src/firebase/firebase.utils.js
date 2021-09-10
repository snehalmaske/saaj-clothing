import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyBZGP1D2kYKEYNlhf2Q34lMJY2GTOZ1EBY",
        authDomain: "saaj-clothing.firebaseapp.com",
        projectId: "saaj-clothing",
        storageBucket: "saaj-clothing.appspot.com",
        messagingSenderId: "819282849315",
        appId: "1:819282849315:web:a27f18079332fe1a050b96",
        measurementId: "G-N7WFXJ8BQD"
      
};

initializeApp(firebaseConfig);



export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebaseConfig;