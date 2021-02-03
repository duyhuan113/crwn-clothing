import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB4OKbk7sQAklVip4Ya6ErNPJqwQxWg0MY",
    authDomain: "crwn-project-1dc5e.firebaseapp.com",
    projectId: "crwn-project-1dc5e",
    storageBucket: "crwn-project-1dc5e.appspot.com",
    messagingSenderId: "446749592106",
    appId: "1:446749592106:web:d9e5465da833f9da151153",
    measurementId: "G-W2J25JWJ7X"
}

firebase.initializeApp(config);


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();