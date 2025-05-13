const express = require('express');
const returns = require("../../network/returns.js")
const controller = require('./controller.js')

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getReg);
router.post('/', addReg)
router.put('/', removeReg);

    
async function getAll(req, res, next){
    try{
        const items = await controller.getAllRegisters();
        returns.success(req, res, items, 200)} 
    catch(err){
        next(err);
    }
};

async function getReg(req, res, next){
    try{
        const items = await controller.getRegister(req.params.id);
        returns.success(req, res, items, 200)
    } catch(err){
        next(err);
    }
};

async function addReg(req, res, next) {
    try{
        const items = await controller.modifyRegister(req.body);
        if (req.body.id == 0) {
            message = 'Item guardado exitosamente';
        }else{
            message = 'Item actualizado exitosamente'
        }
        returns.success(req, res, message, 201)
    }catch(err){
        next(err);
    }
    
}

async function removeReg(req, res, next) {
    try{
        const items = await controller.removeRegister(req.body);
        returns.success(req, res, 'Item eliminado satisfactoriamente', 200);
    }catch(err){
        next(err);
    }
    
}


module.exports = router;