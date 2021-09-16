const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// mysql connection 
const connection = mysql.createConnection({
    host: 'localhost',
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
//Add department function
function addDepartment(){
    inquirer
       .prompt({
           type: "input",
           message: "what is the name of the department you want to add?",
           name: "department"
       })
       .then(function(res){
           const department = res.department;
           const query = `INSERT INTO department (name) VALUES("${department}")`;
           connection.query(query, function(err, res){
               if(err) throw err;
               console.table(res);
               start();
           });
       });
}
///Add role function
function addRole(){
    inquirer
    .prompt(
        [  {
            type:"input",
            message: "What job title do you want to add",
            name: "title"
           },
           {
               type: "input",
               message: "What salary would you like to add",
               name: "salary"
           },
           {
               type: "input",
               message: "What is the department ID?",
               name: "departmentID"
           }
        ]
    )
    .then(function(res){
        const title = res.title;
        const salary = res.salary;
        const departmentID = res.departmentID;
        const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
        connection.query(query, function(err, res){
            if(err) throw err;
            console.table(res);
            start();
        });
    });
}
///add employee function
function addEmployee(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is employee's last name?",
            name: "lastName"
        },
        {
            type:"input",
            message: "What is employee's role ID?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is employee's manager ID?",
            name: "managerID"
        }
    ])
    .then(function(res){
        const firstName = res.firstName;
        const lastName = res.lastName;
        const roleID = res.roleID;
        const managerID = res.managerID;
        const query =`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
        connection.query(query, function(err, res){
            if(err) throw err;
            console.table(res);
            start();
        });
    });
}
// view functions
function viewDepartment(){
    const query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        start();
    });
}
function viewEmployee(){
    const query = "SELECT * FROM employee";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        start();
    });
}
function viewRole(){
    const query = "SELECT * FROM role";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        start();
    });
}
///update function
function updateEmployeeRole(){
    const query = "SELECT id, first_name, last_name, role_id FROM employee";
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        {
            inquirer
            .prompt({
                type: "input",
                message: "Which employee(s) needs a role update?",
                name: "employee"
            });
        }
    });
}