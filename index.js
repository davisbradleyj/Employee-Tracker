// establish dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
// establish connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeTracker"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
    inquirer.prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: ["Add a department", 
      "Add a role", 
      "Add an employee", 
      "View departments", 
      "View roles", 
      "View employees", 
      "Update employee role",
      "Exit"
      ]
    })
    .then(function(answer){
        switch (answer.action) {
            case "Add a department":
              addDepartment();
              break;
      
            case "Add a role":
              addRole();
              break;
      
            case "Add an employee":
              addEmployee();
              break;
      
            case "View departments":
              viewDepartments();
              break;
      
            case "View roles":
              viewRoles();
              break;

            case "View employees":
              viewEmployees();
              break; 

            case "Update employee role":
              updateEmployeeRoles();
              break;
            
            case "Exit":
              exit();
              break; 
        }
    });
}

// build exit function to end session in app
function exit() {
    console.log("Thank you for time, and have a nice day!")
    connection.end();
}

// build view department, selecting all from dept. table
// display using console.table dependency
function viewDepartments() {
    var query = "SELECT * FROM department"
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
    })
    start(); 
};

// build view role, selecting all from role table
// display using console.table dependency
function viewRoles() {
    var query = "SELECT * FROM role"
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
    })
    start();
}; 

// build view employee, selecting all from employee table
// display using console.table dependency
function viewEmployees() {
    var query = "SELECT * FROM employee"
    connection.query(query, function(err,res) {
        if (err) throw err;
        console.table(res);
    })
    start();
}; 

// add department
function addDepartment() {
    inquirer
      .prompt({
        name: "dept",
        type: "input",
        message: "What department would you like to add?"
      })
      .then(function(answer) {
        console.log(answer)
        // var query = "INSERT INTO department (name) VALUES (?)";
        // connection.query(query, answer.dept, function(err,res){
        //     if (err) throw err
        })
        start();
    // });
}

//add role
function addRole() {
    inquirer
      .prompt({
        name: "title",
        type: "input",
        message: "What role would you like to add?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for that role?"
      },
      {
        name: "dept_id",
        type: "input",
        message: "What department is it part of?"
      },
      )
      .then(function(answer) {
        console.log(answer)
        // var query = "INSERT INTO role (title,salary,dept_id) VALUES (?)";
        // connection.query(query, answer, function(err,res){
        //     if (err) throw err
        })
        start();
    // });
}