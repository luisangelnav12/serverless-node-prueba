const serverless = require("serverless-http");
const express = require("express");

const apiSwapiRoutes = require('./routes/apiSwapiRoutes')
const app = express();
app.use(express.json());
app.use('/apiSwapi',apiSwapiRoutes)


module.exports.handler = serverless(app);