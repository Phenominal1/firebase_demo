// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwd8AX7CYm-u1leeB2qDUtgd9KdHoV3kk",
  authDomain: "fir-demo-575e5.firebaseapp.com",
  projectId: "fir-demo-575e5",
  storageBucket: "fir-demo-575e5.appspot.com",
  messagingSenderId: "666381454444",
  appId: "1:666381454444:web:1abfbb0cd9d31668291c49",
  dataBaseURL: "https://fir-demo-575e5-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);