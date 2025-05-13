const db = require("../../DB/mySQL");
const controller = require("./controller");

module.exports = controller(db);