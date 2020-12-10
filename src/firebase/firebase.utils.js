import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDIen5xuKRDTXTMkeiEw7zAx1y3jFth7TA",
    authDomain: "crwn-db-72fc3.firebaseapp.com",
    projectId: "crwn-db-72fc3",
    storageBucket: "crwn-db-72fc3.appspot.com",
    messagingSenderId: "9954856148",
    appId: "1:9954856148:web:0de38bae8a98abf8cbff41",
    measurementId: "G-ZTZWR54WC7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set( {
          displayName, 
          email,
          createdAt, 
          ...additionalData
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: "select_account" });
  export const signINWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;