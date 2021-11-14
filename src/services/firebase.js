import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDNlQ265krbD4MGiT-3tkY5Z6-YNEQ0kxU",
    authDomain: "webdeneme-7fb14.firebaseapp.com",
    databaseURL: "https://webdeneme-7fb14-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "webdeneme-7fb14",
    storageBucket: "webdeneme-7fb14.appspot.com",
    messagingSenderId: "752389789377",
    appId: "1:752389789377:web:2604494552aaf18b58a640",
    measurementId: "G-CYHFPBHK1T"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let amount,currency,tcurrency;
function Ready(){
    amount = document.getElementById('Amount').value;
    currency = document.getElementById('Currency').value;
    tcurrency = document.getElementById('TCurrency').value;
}
document.getElementById('myBtn').onclick = function(){
    let today = Date.now();
    console.log(today)
    Ready();
    firebase.database().ref('user/' + today).set({
        AmountPrice: amount,
        Currency1:currency,
        Tcurrency1:tcurrency
    });
}
export default database;