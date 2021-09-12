const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// mysql connection 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Thinkpadchester1!',
    database: 'business'
});
connection.connect(function(err){
    if(err) throw err;
    start();
});