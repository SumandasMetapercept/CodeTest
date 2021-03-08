import { initializeApp} from 'firebase';

const app =initializeApp({
    apiKey: "AIzaSyCbYvlBk68y69a8etsGP14c_MFer-4akJ4",
    authDomain: "jsfirebase-86c1f.firebaseapp.com",
    databaseURL: "https://jsfirebase-86c1f-default-rtdb.firebaseio.com",
    projectId: "jsfirebase-86c1f",
    storageBucket: "jsfirebase-86c1f.appspot.com",
    messagingSenderId: "1092792474549",
    appId: "1:1092792474549:web:c46c19d133944f513497fc"

});

export const db = app.database();
export const namesRef = db.ref ('names');
