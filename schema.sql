DROP DATABASE IF EXISTS employeeTracker;
CREATE database employeeTracker;
USE employeeTracker;

CREATE TABLE department (
dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) 
);
CREATE TABLE role (
role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT REFERENCES department(dept_id)
);
CREATE TABLE employee (
emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL REFERENCES role(role_id),
manager_id INT REFERENCES employee(emp_id)
);