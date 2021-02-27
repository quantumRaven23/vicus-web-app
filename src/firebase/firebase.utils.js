/******************************************
 *  Author : quantumRaven23   
 *  Created On : Wed Feb 24 2021
 *  File : firebase-utils.js
 *******************************************/

import firebase from 'firebase/app';
import 'firebase/database';

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

export const database = firebase.database();

// export const ITEM_DATA = ()=>{
//     var dataArr = [];
//     database.ref("ITEM_DATA").once("value").then((snapshot)=>{

//     });
// };

export default firebase;