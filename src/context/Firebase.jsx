import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getDatabase, set, ref } from "firebase/database";
import {getFirestore, collection ,addDoc, doc, getDoc, query, getDocs, where} from 'firebase/firestore'



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
const firestore = getFirestore(FirebaseApp);
const  googleProvider = new GoogleAuthProvider();
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {


    const SignUpUserWithEmailAndPassword =(email, password)=>{
       return createUserWithEmailAndPassword(firestore, email, password)
    };

    const SignUpWithGoogle = () =>{
        return signInWithPopup(FirebaseAuth, googleProvider);
    };


    const putData = (key, data) =>{
            return set(ref(database, key),data);
    };

    const putDataFirestore2 = async () =>{
            const res = await addDoc(collection(firestore,"cities/IPU2F4eYee1IjHy5mbbz/locations"), {
                area:"sai vihar",
                post:"jwala nagar",
                palces:"nice palces to visit",
            }
            );
            console.log(res);
    };

    const putDataFirestore = async () =>{
        const res = await addDoc(collection(firestore,"cities"), {
            name:"Rampur",
            pin:244901,
            state: "Uttar Pradesh",
        }
        );
        
        console.log(res);
};

    const ReadData = async () =>{
            const ref = doc(firestore, "cities", "IPU2F4eYee1IjHy5mbbz", "locations", "ZmPgseaIA4H8Nc1eUBms")
            const snap = await getDoc(ref);
            console.log(snap.data()); 
    };


    const readDataWithQuerry = async () =>{
        const ref = collection(firestore, "users");
        const q = query(ref, where("gender","==", "male"));
        const snap = await getDocs(q);
        snap.forEach((data)=>console.log(data.data()));

    }




    const LoginUserWithEmailAndPassword =(email, password) =>{
        return (
            signInWithEmailAndPassword(FirebaseAuth,email, password) 
        );
    };

return(
     <FirebaseContext.Provider value={{SignUpUserWithEmailAndPassword,LoginUserWithEmailAndPassword,SignUpWithGoogle, putData, putDataFirestore,putDataFirestore2, ReadData, readDataWithQuerry}}>
        {props.children}
    </FirebaseContext.Provider>
    )
}