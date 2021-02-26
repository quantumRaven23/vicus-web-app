/******************************************
 *  Author : quantumRaven23   
 *  Created On : Wed Feb 24 2021
 *  File : firebase-utils.js
 *******************************************/

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDg7EkMhhqJYq3M7ZIrK8iuO_twShk2kAE",
    authDomain: "vicus-demo-bb2a5.firebaseapp.com",
    projectId: "vicus-demo-bb2a5",
    storageBucket: "vicus-demo-bb2a5.appspot.com",
    messagingSenderId: "151032541807",
    appId: "1:151032541807:web:642ed9d3746f0d356f939a",
    measurementId: "G-E42FFG2QHY"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;