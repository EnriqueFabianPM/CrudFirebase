// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA88BGBiQPcWTHNkD4LP686HvoBwJiwk0o",
    authDomain: "mi-proyecto-ee1f2.firebaseapp.com",
    projectId: "mi-proyecto-ee1f2",
    storageBucket: "mi-proyecto-ee1f2.appspot.com",
    messagingSenderId: "69566651375",
    appId: "1:69566651375:web:8eec75b993a88ea261741a"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) => addDoc(collection(db, "tasks"), {title, description });
export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

/**
 * 
 * @param {string} id Task ID
 */

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);
export const getTasks = () => getDocs(collection(db, "tasks"));