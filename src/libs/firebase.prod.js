import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDfWtP94i1qDgt_zwdVw1_rCOI_wJaH8LQ",
  authDomain: "netflix-bfa7b.firebaseapp.com",
  projectId: "netflix-bfa7b",
  storageBucket: "netflix-bfa7b.appspot.com",
  messagingSenderId: "802714933319",
  appId: "1:802714933319:web:f33a54ddb5ec0a5c477962",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
