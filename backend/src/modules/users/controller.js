const db = require("../../DB/mySQL");
const table = 'users'

module.exports = function (db){

    function getAllRegisters() {
        return db.getAll(table);
    }
    
    function getRegister(id) {
        return db.getRegister(table, id);
    }
    
    function addRegister(body) {
        return db.addRegister(table, body);
    }
    
    function removeRegister(body){
        return db.removeRegister(table, body);
    }

    return {
        getAllRegisters,
        getRegister,
        removeRegister,
        addRegister
    }
}