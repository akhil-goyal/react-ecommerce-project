import firebase from 'firebase/firebase';
import 'firebase/auth';
import 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyD5Mul-CljYjfqqjFYbEgMuxWMFCBvfQSs",
    authDomain: "web-dev-test-ed61b.firebaseapp.com",
    projectId: "web-dev-test-ed61b",
    storageBucket: "web-dev-test-ed61b.appspot.com",
    messagingSenderId: "395896995525",
    appId: "1:395896995525:web:1264c5e05f25fb6ef9faac"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();