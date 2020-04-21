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

connection.connect(function (err) {
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
    .then(function (answer) {
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
        "Delete a Department",
        "View Department Budgets",
        "Return to Start Menu"
      ]
    }
  ])
    .then(function (answer) {
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

        case "View Department Budgets":
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
      choices: ["View Roles",
        "Add a Role",
        "Delete a Role",
        "Return to Start Menu"]
    }])
    .then(function (answer) {
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
        "Update Employee Role",
        "Update Manager",
        "View Employees by Manager",
        "Return to Start Menu"]
    }])
    .then(function (answer) {
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

        case "Update Employee Role":
          updateEmployeeRole();
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
  var query = "SELECT name as Department, dept_id as 'Dept ID' FROM department"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
  })
  start();
};
// build view role, selecting all from role table
// display using console.table dependency
function viewRoles() {
  var query = "SELECT title as Title, role_id as 'Role #', salary as Salary, department.name as Department FROM role LEFT JOIN department ON role.dept_id = department.dept_id"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
  })
  start();
};
// build view employee, selecting all from employee table
// display using console.table dependency
function viewEmployees() {
  var query = "SELECT first_name as First, last_name as Last, emp_id as 'ID #', department.name as Department, role.title as Title, role.salary as Salary FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.dept_id = department.dept_id"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
  })
  start();
};
// add department, writing as of 4-20-2020
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "dept",
        type: "input",
        message: "What department would you like to add?"
      }])
    .then(function (answer) {
      console.log(answer.dept)
      var query = `INSERT INTO department (name) VALUES ("${answer.dept}")`;
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err
        viewDepartments();
      })
    });
}
//add role, writing as of 4-20-2020
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
      name: "dept",
      type: "input",
      message: "Please list the department id for this role:"
    }])
    .then(function (answer) {
      console.log(answer)
      var query = `INSERT INTO role (title,salary,dept_id) VALUES ("${answer.title}",${answer.salary},${answer.dept})`;
      connection.query(query, answer, function (err, res) {
        if (err) throw err
        viewRoles();
      })
    });
}
//add employee, writing as of 4-19-2020
function addEmployee() {
  inquirer.prompt([
    {
      name: "first",
      type: "input",
      message: "What is the first name?"
    },
    {
      name: "last",
      type: "input",
      message: "What is the last name?"
    },
    {
      name: "role",
      type: "input",
      message: "What is the role id?"
    },
    {
      name: "manager",
      type: "input",
      message: "What is the manager id?",
      default: 1
    }])
    .then(function (answer) {
      var query = `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("${answer.first}","${answer.last}",${answer.role},${answer.manager})`;
      connection.query(query, answer, function (err, res) {
        if (err) throw err
        viewEmployees();
      });
    });
}
// update employee role function, writing as of 4-19-2020
function updateEmployeeRole() {
  inquirer.prompt([
    {
      name: "employee",
      type: "input",
      message: "What is the employee id number?"
    },
    {
      name: "role",
      type: "input",
      message: "What is the new role id number?"
    }])
    .then(function (answer) {
      console.log(answer)
      var query = `UPDATE employee SET role_id = ${answer.role} WHERE emp_id = ${answer.employee}`;
      connection.query(query, function (err, res) {
        if (err) throw err
      });
      console.log("\n" + "Please update the manager id" + "\n")
      updateManager();      
    });
}
// update manager function, writing as of 4-20-2020
function updateManager() {
  inquirer.prompt([
    {
      name: "employee",
      type: "input",
      message: "What is the employee id number?"
    },
    {
      name: "manager",
      type: "input",
      message: "What is the manager's employee id number?",
      default: 1
    }])
    .then(function (answer) {
      console.log(answer)
      var query = `UPDATE employee SET manager_id = ${answer.manager} WHERE emp_id = ${answer.employee}`;
      connection.query(query, function (err, res) {
        if (err) throw err 
      }); 
      viewEmployees();
    });
}
// Review Dept budget
// console.table a join which displays totals for each depts salaries, writing as of 4-20-2020
function deptBudget() {
  var query = "SELECT name as Department, sum(role.salary) as 'Department Budget' FROM department LEFT JOIN role ON department.dept_id = role.dept_id GROUP BY name"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
    start();
  })
};

// View employees by Manager number
// console.table a join which displays all employees under a certain manager number, writing as of 4-20-2020
function managerEmployees() {
  inquirer.prompt([
    {
      name: "manager",
      type: "input",
      message: "What is the manager's employee id number?"
    }])
    .then(function (answer) {
      var query = `SELECT * FROM employee WHERE manager_id = ${answer.manager}`
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("\n")
        console.table(res);
      })
      start();
    });
}

// Delete a Department, writing as of 4-20-2020
function delDepartment() {
  inquirer.prompt([
      {
        name: "dept",
        type: "input",
        message: "What department would you like to delete?"
      }])
    .then(function (answer) {
      console.log(answer.dept)
      var query = `DELETE FROM department WHERE name="${answer.dept}"`;
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err
      })
      viewDepartments();
    });
}
// Delete a Role, writing as of 4-20-2020
function delRole() {
  inquirer.prompt([
      {
        name: "role",
        type: "input",
        message: "What role would you like to delete?"
      }])
    .then(function (answer) {
      console.log(answer.role)
      var query = `DELETE FROM role WHERE title="${answer.role}"`;
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err        
      })
      viewRoles();
    });
}
// Delete an Employee, writing as of 4-20-2020
function delEmployee() {
  inquirer.prompt([
      {
        name: "employee",
        type: "input",
        message: "Please enter the id for the employee you want to remove?"
      }])
    .then(function (answer) {
      console.log(answer.employee)
      var query = `DELETE FROM employee WHERE emp_id="${answer.employee}"`;
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err        
      })
      viewEmployees();
    });
}