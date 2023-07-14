const ApiSwapiModel=require('../models/apiSwapiModel');
const { httpGet } = require("../utils/httpRequest");
const conecction = require('../database/db');
class ApiSwapiService{

  constructor() {
    this.people = [];
  }
  async getAllStarWars(){
    try{

    const result= await httpGet('https://swapi.dev/api/people/1/')
    console.log("result" );
    console.log(result);
    const apiSwapi = new ApiSwapiModel(result);
    // console.log("resultado ");
    // console.log(apiSwapi);
    const traducido=await apiSwapi.traducir()

    return traducido;
    }catch(error){
      console.log(error);
    }
  }
  getAllPeople(){
    return this.people;
  }
  async getExpenses(){
    let query="SELECT * FROM db_japiexpress.lui_gasto";

    let result = await conecction.query(query);
    console.log(result);
    return result;
  }
  postExpenses(monto,categoria){
    let query=`Insert into db_japiexpress.lui_gasto ( monto,categoria) values (?,?)`
    let params=[monto,categoria]
    let result = conecction.query(query,params);
    console.log(result);
  }
}
module.exports = ApiSwapiService;