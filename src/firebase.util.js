// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDocs, getDoc, updateDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA5-Gd0P08Uuf-koz6AG_plbqUD2fIn2U",
    authDomain: "invitation-prom-2022.firebaseapp.com",
    projectId: "invitation-prom-2022",
    storageBucket: "invitation-prom-2022.appspot.com",
    messagingSenderId: "137528060781",
    appId: "1:137528060781:web:48d2ce62e9a7a6580a8864",
    measurementId: "G-MDF7LT4FFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export async function getGuests() {
    const guestsCol = collection(db, 'guests');
    const guestsSnapshot = await getDocs(guestsCol);
    const guestList = guestsSnapshot.docs.map(doc => doc.data());
    return guestList;
}

export async function setTeacher(name) {
    const cityRef = await getDoc(doc(db, 'guests', 'teachers'))

    // Set the 'capital' field of the city
    await updateDoc(doc(db, 'guests', 'teachers'), {
        [name]: true
    })
    return cityRef.data();
}