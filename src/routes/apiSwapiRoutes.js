const express = require('express');
const router = express.Router();
const apiSwapiCtrl = require('../controllers/apiSwapiController');

const api=new apiSwapiCtrl()
router.get('/', api.getAllPeople);
router.get('/expenses', api.getExpenses);
router.post('/expenses', api.postExpenses);

module.exports = router;