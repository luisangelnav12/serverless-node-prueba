const i18next = require('../../i18next');
class ApiSwapiModel{
  constructor(response){
    this.response=response;
  }
  traducir(){
    const translate = {};

    for (const key in this.response) {

    let atributo=i18next.t(key,{key:this.response[key]})
    translate[atributo]=this.response[key];
    }

   return translate;

  }
}
module.exports=ApiSwapiModel;