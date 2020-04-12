import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsJ3qC1sNtZWe8HoDb0b7IWXtzOkkwP8E",
    authDomain: "bb-crwn-db.firebaseapp.com",
    databaseURL: "https://bb-crwn-db.firebaseio.com",
    projectId: "bb-crwn-db",
    storageBucket: "bb-crwn-db.appspot.com",
    messagingSenderId: "238961020045",
    appId: "1:238961020045:web:38487c3f4e215ab7c9e6c4",
    measurementId: "G-V9MQY1LBZ9"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
