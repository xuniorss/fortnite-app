import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyA-DQRXBRuJ_Gyhk--j8XlqKNmvNz8ZIaw",
    authDomain: "fortnite-app-81a0d.firebaseapp.com",
    projectId: "fortnite-app-81a0d",
    storageBucket: "fortnite-app-81a0d.appspot.com",
    messagingSenderId: "367330623948",
    appId: "1:367330623948:web:2a5d42297704d14fa11d69",
    measurementId: "G-8SQEVNDRXE"
};

if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
export default firebase