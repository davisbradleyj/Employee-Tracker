INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Human Resources") ;
INSERT INTO role (title, salary, department_id)
VALUES ("Web Developer",100000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer",120000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer",150000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Technology Officer",200000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Development Rep",60000,2);
INSERT INTO role (title, salary, department_id) 
VALUES ("Account Executive",85000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Director",120000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Vice President - Sales",160000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Revenue Officer",200000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Compliance Analyst",100000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("Compliance Manager",130000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("Counsel",180000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Counsel",220000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("IT Analyst",90000,4);
INSERT INTO role (title, salary, department_id)
VALUES ("IT Manager",130000,4);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance Operations Analyst",80000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance Operations Manager",120000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant",95000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Controller",140000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Risk Analyst",120000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Risk Manager",160000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Financial Officer",200000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Analyst",80000,6);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager",120000,6);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Human Resources Officer",180000,6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Everett", "Begum",2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gaia", "Sellers",1,1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Lisa-Marie", "Flowers",6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Rafi", "Adamson",12);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Emilis", "Robson",14);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Suraj", "Martins",16);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tyler", "Clayton",20);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lewie", "Everett",19,7);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jordana", "Munoz",24);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Samad", "Welsh",23,9);
