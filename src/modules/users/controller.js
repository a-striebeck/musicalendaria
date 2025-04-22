const db = require("../../DB/mySQL");
const table = 'users'

function getAllRegisters() {
    return db.getAll(table);
}

module.exports = {
    getAllRegisters,
}