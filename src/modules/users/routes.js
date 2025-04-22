const express = require('express');
const returns = require("../../network/returns.js")
const controller = require('./controller')

const router = express.Router();

router.get('/', function (req, res){
    const table = controller.getAllRegisters();
    returns.success(req, res, "Todo OK", 200)
});

module.exports = router;