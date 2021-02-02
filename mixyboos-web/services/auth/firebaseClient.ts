import firebase from 'firebase/app';
const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyAb_keVp-Fj2LrsWrs_hoL4ontHXJWyS64',
    authDomain: 'mixyboos.firebaseapp.com',
    projectId: 'mixyboos',
    storageBucket: 'mixyboos.appspot.com',
    messagingSenderId: '439274865889',
    appId: '1:439274865889:web:09f7f283d81edc7de223a0',
    measurementId: 'G-JY80Y5R5JD',
};

const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
};
export default firebaseClient;
