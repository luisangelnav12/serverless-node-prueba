const axios = require('axios');

// Make a GET request to the Google homepage
async function  httpGet(url) {

   resultado=await axios.get(url)
   console.log("resultado "+resultado.data);
  return resultado.data;

}
module.exports = {httpGet};
