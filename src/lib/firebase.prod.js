import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDjQxiZ8EvSRq-yNzpybs_TDZqAF5yqtT0",
    authDomain: "netflix-59ef3.firebaseapp.com",
    projectId: "netflix-59ef3",
    storageBucket: "netflix-59ef3.appspot.com",
    messagingSenderId: "1027466946261",
    appId: "1:1027466946261:web:15daaa9ebc7bbd106e245c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };