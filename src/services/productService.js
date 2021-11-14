import axios from "axios";
import firebase from 'firebase';

window.onload = function () {
  document.getElementById('myBtn').addEventListener('click', event => {
    axios.post(`https://api.frankfurter.app/latest?amount=${getValAmount()}&from=${getValTranslate()}&to=${getValTranslated()}`)
      .then(json => dataDonusturme(json.data.rates[document.getElementById('TCurrency').value]))
  })


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
    let dateString = new Date().toLocaleString("TR", {timeZone: "Europe/Istanbul"});
  let formattedString = dateString.replaceAll(".", "");
  console.log(formattedString)
    Ready();
    firebase.database().ref('user/' + formattedString).set({
        AmountPrice: amount,
        Currency1:currency,
        Tcurrency1:tcurrency
    });


}
function dataDonusturme(Result) {
  document.getElementById("durumId").innerHTML = Result
}

function getValAmount() {
  const valCurrency = document.getElementById("Amount").value;
  return valCurrency
}
function getValTranslate() {
  const valTranslate = document.getElementById("Currency").value;
  return valTranslate
}
function getValTranslated() {
  const valTranslated = document.getElementById('TCurrency').value;
  return valTranslated
}


//REALTIME DATA


}


//REALTIME DATA




export default class ProductService {
  getToken() {
    return;
  }
}