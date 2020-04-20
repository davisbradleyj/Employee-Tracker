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
//main menu
function start() {
  inquirer.prompt([
   {
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: ["Review Departments", 
    "Review Roles", 
    "Review Employees", 
    "Exit"]
    }])
  .then(function(answer){
      switch (answer.action) {
          case "Review Departments":
            dept();
            break;
      
          case "Review Roles":
            roles();
            break;
      
          case "Review Employees":
            employees();
            break;
      
          case "Exit":
            exit();
            break; 
      }
  });
}
// department menu
function dept() {
  inquirer.prompt([
  {
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: ["View Departments", 
    "Add a Department", 
    "Delete Departments",
    "View Department Budget", 
    "Return to Start Menu"
    ]
  }
  ])
  .then(function(answer){
      switch (answer.action) {
          case "View Departments":
            viewDepartments();
            break;
    
          case "Add a Department":
            addDepartment();
            break;
    
          case "Delete a Department":
            delDepartment();
            break;
          
          case "View Departments Budget":
            deptBudget();
            break;  

          case "Return to Start Menu":
            start();
            break; 
      }
  });
}
// roles menu
function roles() {
  inquirer.prompt([
  {
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: ["View Roless", 
    "Add a Role", 
    "Delete Role", 
    "Return to Start Menu"
    ]
  }
  ])
  .then(function(answer){
      switch (answer.action) {
          case "View Roles":
            viewRoles();
            break;
    
          case "Add a Role":
            addRole();
            break;
    
          case "Delete a Role":
            delRole();
            break;
          
          case "Return to Start Menu":
            start();
            break; 
      }
  });
}
// employees menu
function employees() {
  inquirer.prompt([
  {
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: ["View Employees", 
    "Add an Employee", 
    "Delete an Employee",
    "Update Manager",
    "View Employees by Manager",
    "Return to Start Menu"
    ]
  }
  ])
  .then(function(answer){
    switch (answer.action) {
        case "View Employees":
          viewEmployees();
          break;
  
        case "Add an Employee":
          addEmployee();
          break;
  
        case "Delete an Employee":
          delEmployee();
          break;
        
        case "Update Manager":
          updateManager();
          break;  
        
        case "View Employees by Manager":
          managerEmployees();  
          break;

        case "Return to Start Menu":
          start();
          break; 
    }
  });
}
// build exit function to end session in app
function exit() {
  console.log("Thank you for your time, and have a nice day!")
  connection.end();
}
// build view department, selecting all from dept. table
// display using console.table dependency
function viewDepartments() {
  var query = "SELECT * FROM department"
  connection.query(query, function(err,res) {
      if (err) throw err;
      console.table(res);
      start(); 
  })
};
// build view role, selecting all from role table
// display using console.table dependency
function viewRoles() {
  var query = "SELECT * FROM role"
  connection.query(query, function(err,res) {
      if (err) throw err;
      console.table(res);
      start();
  })    
}; 
// build view employee, selecting all from employee table
// display using console.table dependency
function viewEmployees() {
  var query = "SELECT * FROM employee"
  connection.query(query, function(err,res) {
      if (err) throw err;
      console.table(res);
      start();
  })
}; 
// add department, not writing as of 4-19-2020
function addDepartment() {
  inquirer
    .prompt([
    {
      name: "dept",
      type: "input",
      message: "What department would you like to add?"
    }])
    .then(function(answer) {
      console.log(answer.dept)
      // var query = "INSERT INTO department (name) VALUES (?)";
      // connection.query(query, answer.dept, function(err,res){
      //     if (err) throw err
      viewDepartments();
      })
  // });
}
//add role, not writing as of 4-19-2020
function addRole() {
  inquirer.prompt([
    {
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
    }])
    .then(function(answer) {
      console.log(answer)
      // var query = "INSERT INTO role (title,salary,dept_id) VALUES (?)";
      // connection.query(query, answer, function(err,res){
      //     if (err) throw err
      viewRoles();
      })
  // });
}
//add employee, not writing as of 4-19-2020
function addEmployee() {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the first name?"
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the last name?"
    },
    {
      name: "role_id",
      type: "input",
      message: "What is the role id?"
    },
    {
      name: "manager_id",
      type: "input",
      message: "Please enter the manager id, if applicable."
    }])
    .then(function(answer) {
      console.log(answer)
      // var query = "SELECT * from employee (first_name,last_name,role_id,manager_id) VALUES (?)";
      // connection.query(query, answer, function(err,res){
      //     if (err) throw err
      viewEmployees();
      })
  // });
}
// update manager function, not writing as of 4-19-2020
function updateManager() {
  inquirer.prompt([       
    {
      name: "employee_id",
      type: "input",
      message: "What is the employee id number?"
    },
    {
      name: "manager_id",
      type: "input",
      message: "What is the manager's employee id number?"
    }])
    .then(function(answer) {
      console.log(answer)
      // var query = "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?)";
      // connection.query(query, answer, function(err,res){
      //     if (err) throw err
      viewEmployees();
  })
}

// Review Dept budget
// console.table a join which displays totals for each depts salaries

// View employees by Manager number
// console.table a join which displays all employees under a certain manager number

// Delete a Department

// Delete a Role

// Delete an Employee