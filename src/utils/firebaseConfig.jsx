// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndk_NYw0GXE8OXftRzneqeZyzbdnS5CU",
  authDomain: "shopsmart-ea7a9.firebaseapp.com",
  projectId: "shopsmart-ea7a9",
  storageBucket: "shopsmart-ea7a9.appspot.com",
  messagingSenderId: "358364832251",
  appId: "1:358364832251:web:22a2350383d9e87f636b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);