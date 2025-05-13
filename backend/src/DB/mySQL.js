const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let connection;

function connectToMySQL(){
    connection = mysql.createConnection(dbconfig);
    connection.connect((err =>{
        if(err){
            console.log("[DB error]", err);
            setTimeout(connectToMySQL, 200);
        }else{
            console.log("DB Connected");
        }
    }))
    connection.on('error', err =>{
        console.log("[DB error]", err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            connectToMySQL();
        }else{
            throw err;
        }
    })
}

connectToMySQL();

function getAll(table){
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM ??`,[table] , (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getRegister(table, id) {
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM ?? WHERE id= ?`,[table, id] ,(error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function modifyRegisters(table, data) {
    if (data && data.id == 0) {
        return insertRegister(table, data);
    }else{
        return updateRegister(table, data);
    }
}

function insertRegister(table, data) {
    return new Promise ((resolve, reject) => {
        connection.query(`INSERT INTO ?? SET ?`, [table, data], (error, result) =>{
            return error ? reject(error) : resolve (result);
        })
    })
}

function updateRegister(table, data){
    return new Promise( (resolve, reject) =>{
        connection.query(`UPDATE ?? SET ? WHERE id= ?`, [table, data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}


function removeRegister(table, data) {
    return new Promise( (resolve, reject) =>{
        connection.query(`DELETE FROM ?? WHERE id= ?`, [table, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = {
    getAll,
    getRegister,
    modifyRegisters,
    removeRegister,
}