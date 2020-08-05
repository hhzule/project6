import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHLYuEMlm0YxfEmNlSHBP-AqVCW4Z3svU",
    authDomain: "quiz-app-d8b85.firebaseapp.com",
    databaseURL: "https://quiz-app-d8b85.firebaseio.com",
    projectId: "quiz-app-d8b85",
    storageBucket: "quiz-app-d8b85.appspot.com",
    messagingSenderId: "884260017590",
    appId: "1:884260017590:web:37cff4432f8a408b525d17"
}

firebase.initializeApp(config);

export default firebase;
