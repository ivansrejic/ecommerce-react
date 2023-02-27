// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyAifbVyU_uhnNoz7C_PuBlR7U7EAnkgxp0",
//     authDomain: "ecommerce-react-f13a7.firebaseapp.com",
//     projectId: "ecommerce-react-f13a7",
//     storageBucket: "ecommerce-react-f13a7.appspot.com",
//     messagingSenderId: "984707636601",
//     appId: "1:984707636601:web:063b1950c91065035e63a8",
//     measurementId: "G-VP95ZC2H7V"
//   }

//   firebase.initializeApp(config);

//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: 'select_account' });
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   export default firebase;


import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, collection, getDoc, setDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAifbVyU_uhnNoz7C_PuBlR7U7EAnkgxp0",
    authDomain: "ecommerce-react-f13a7.firebaseapp.com",
    projectId: "ecommerce-react-f13a7",
    storageBucket: "ecommerce-react-f13a7.appspot.com",
    messagingSenderId: "984707636601",
    appId: "1:984707636601:web:063b1950c91065035e63a8",
    measurementId: "G-VP95ZC2H7V"
}



const firebase = initializeApp(config);


const firestore = getFirestore(firebase);

const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => 
       signInWithPopup(auth, provider);
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore,`users/${userAuth.uid}`);
    
    const snapShot = await getDoc(userRef);
    //console.log(userRef);
    
    if(!snapShot.exists())
    {
      const {displayName, email} = userAuth; //Odavde uzimamo 
      const createdAt = new Date();

      try 
      {
        await setDoc(userRef,{
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }
      catch (err)
      {
        console.log('error creating user' + err.message );
      }
    }
    return userRef;
}  
  
export default firebase;
export { firestore, auth, provider, signInWithGoogle };


