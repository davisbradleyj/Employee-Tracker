DROP DATABASE IF EXISTS employeeTracker;
CREATE database employeeTracker;
USE employeeTracker;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) 
);
CREATE TABLE role (
id VARCHAR(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT
FOREIGN KEY department_id REFERENCES department(department_id)
);
CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY role_id REFERENCES role(role_id),
FOREIGN KEY manager_id REFERENCES employee(employee_id)
);