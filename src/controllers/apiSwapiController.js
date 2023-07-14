const ApiSwapiService=require('../services/apiSwapiService');
const { successResponse } = require("../utils/successResponse");
const { errorResponse } = require("../utils/successResponse");

class ApiSwapiController{

  //api get de una api
  async getAllPeople(req,res){
    try {
     const apiSwapiService = new ApiSwapiService();
      const getHi =  await apiSwapiService.getAllStarWars();
      successResponse(res, getHi);
    } catch (error) {
      console.log(error);
      errorResponse(res, error);
    }
  }
  //api get de una bd
  async getExpenses(req,res){
    try{
    const apiSwapiService = new ApiSwapiService();
    const listPrdocuts =await apiSwapiService.getExpenses();
    successResponse(res, listPrdocuts);
    }catch(error){
      console.log(error);
      errorResponse(res, error);
    }
  }
  //api post a una bd
  async postExpenses(req,res){
    try{
    let { monto,categoria}=req.body;
    const apiSwapiService = new ApiSwapiService();
    const listExpenses =  await apiSwapiService.postExpenses(monto,categoria);
    successResponse(res, listExpenses);
    }catch(error){
      console.log(error);
      errorResponse(res, error);
    }
  }

}
module.exports=ApiSwapiController;