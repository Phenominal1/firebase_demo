import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getDatabase, set, ref } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyDwd8AX7CYm-u1leeB2qDUtgd9KdHoV3kk",
    authDomain: "fir-demo-575e5.firebaseapp.com",
    projectId: "fir-demo-575e5",
    storageBucket: "fir-demo-575e5.appspot.com",
    messagingSenderId: "666381454444",
    appId: "1:666381454444:web:1abfbb0cd9d31668291c49",
    dataBaseURL: "https://fir-demo-575e5-default-rtdb.firebaseio.com/"
  };


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
const database = getDatabase(FirebaseApp);
const  googleProvider = new GoogleAuthProvider();
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {


    const SignUpUserWithEmailAndPassword =(email, password)=>{
       return createUserWithEmailAndPassword(FirebaseAuth, email, password)
    };

    const SignUpWithGoogle = () =>{
        return signInWithPopup(FirebaseAuth, googleProvider);
    };


    const putData = (key, data) =>{
            return set(ref(database, key),data);
    };

    const LoginUserWithEmailAndPassword =(email, password) =>{
        return (
            signInWithEmailAndPassword(FirebaseAuth,email, password) 
        );
    };

return(
     <FirebaseContext.Provider value={{SignUpUserWithEmailAndPassword,LoginUserWithEmailAndPassword,SignUpWithGoogle, putData}}>
        {props.children}
    </FirebaseContext.Provider>
    )
}