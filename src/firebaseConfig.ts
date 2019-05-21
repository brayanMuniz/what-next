import firebase from 'firebase'
let config = {
    apiKey: "AIzaSyCnc1MNuVwmqcKJhjNJSc5tgAteWsoZIiI",
    authDomain: "make-this-next.firebaseapp.com",
    databaseURL: "https://make-this-next.firebaseio.com",
    projectId: "make-this-next",
    storageBucket: "make-this-next.appspot.com",
    messagingSenderId: "635782470778"
}

firebase.initializeApp(config);

let database = firebase.firestore();
let storage = firebase.storage();
let auth = firebase.auth()
let fbFunctions = firebase.functions();
let firebaseRef = firebase
export default {
    database,
    storage,
    auth,
    fbFunctions,
    firebaseRef
}