# Employee-Tracker

## Description

With this application, the challenge is to design and build a solution that will manage a company's employees utilizing node, inquirer, and MySQL.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- JavaScript - used to create the logic controlling the 
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- MySQL Workbench - database used for storing and calling information on commandline application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

Following a very successful week of instruction, coupled with some familiarity with how to construct SQL statements, this specific project was something I was excited to tackle.

My first task was to create the schema.sql and seed.sql files. I wanted to have a decent starting point for the build of my database.  For the schema file, I made sure to use REFERENCES to create the Foreign Keys which would make building some of the queries slightly easier to manipulate:

```
CREATE TABLE employee (
emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL REFERENCES role(role_id),
manager_id INT REFERENCES employee(emp_id)
);
```
In building the index.js file, my initial plan was to use switch statements to access all the various functions which would get, post, or delete information.  When I was up to a menu of 12 items, I reconsidered the formatting and thought it would be more appropriate to organize by category: Department, Role, Employee.  And a function to exit the command line application.

Each of these three primary menus would then prompt options to view, add, or delete a new entry for that specific database table.  For the Department menu, I also included an option to display each Department and the budgeted salaries for all employees grouped by Department:

```
function deptBudget() {
  var query = "SELECT name as Department, sum(role.salary) as 'Department Budget' FROM department LEFT JOIN role ON department.dept_id = role.dept_id GROUP BY name"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
    start();
  })
};
```
The employee menu includes a few additional functions specific to manipulating employee specific data.  From that menu, a user can list the employees under a manager, add or update the manager id for an employee, or update an employee's role (in the event of a promotion or transfer to a new role), along with a corresponding update that would be prompted to alter that employee's manager.  

```
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
```

I have created a movie of all command line options in action, however, that .mov file is about 3:30 in length, and not practical for display here. <a href="https://github.com/davisbradleyj/Employee-Tracker/blob/master/Assets/Employee%20Tracker%20Recording.mov">Feel free to follow this link if you wish to download that movie in its entirety.</a>

As an alternative, here is a gif of some of the "view" features avaiable through this application.

<img src="https://github.com/davisbradleyj/Employee-Tracker/blob/master/Assets/employee_tracker.gif">


## License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Corbin Brockbank

## Installation

To install necessary dependencies for this application, the following commands are required:

`npm init` - To create the package.json file.

`npm i express mysql console.table` - Adds node modules and populates the package-lock.json file.

## Tests

No tests were required for this application

## Questions

<img src="https://avatars2.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

If you have any questions about the repository, open an issue or contact [Brad Davis](https://api.github.com/users/davisbradleyj) directly at davis.bradleyj@gmail.com