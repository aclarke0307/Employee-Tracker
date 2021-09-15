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
// inquirer start function
function start(){
    inquirer
    .prompt({
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "view Department",
            "view Role",
            "view Employee",
            "update Employee Role",
            "Exit"
        ]
    })
    .then(function(result){
        switch (result.option){
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "view Department":
                viewDepartment();
                break;
            case "view Role":
                viewRole();
                break;
            case "view Employee":
                viewEmployee();
                break;
            case "update Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
}