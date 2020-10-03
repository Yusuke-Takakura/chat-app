import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnHcIk9-eoNIO3TL7jKFvwJSXdcXZXork",
    authDomain: "chat-app-658f5.firebaseapp.com",
    databaseURL: "https://chat-app-658f5.firebaseio.com",
    projectId: "chat-app-658f5",
    storageBucket: "chat-app-658f5.appspot.com",
    messagingSenderId: "994501021143",
    appId: "1:994501021143:web:8898bffe1c44f9b8f1cf92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();

