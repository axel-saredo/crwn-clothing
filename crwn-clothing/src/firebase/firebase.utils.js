import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyApsF21AnECeH9G8R_C1JQC-Fp9FW0_2z0',
  authDomain: 'crwn-db-270020.firebaseapp.com',
  databaseURL: 'https://crwn-db-270020.firebaseio.com',
  projectId: 'crwn-db-270020',
  storageBucket: 'crwn-db-270020.appspot.com',
  messagingSenderId: '59835086003',
  appId: '1:59835086003:web:e1ad5c983aea13bfb7ecc6',
  measurementId: 'G-GZXWS1TT3E'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
