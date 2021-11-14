import axios from "axios";

axios.get('https://api.frankfurter.app/latest?amount=1&from=USD&to=TRY')
  .then(function(response){console.log(response.data)})

export default class ProductService{
      getToken(){
          return ;
      }
  }