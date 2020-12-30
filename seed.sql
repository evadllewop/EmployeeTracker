
USE employeeTracker_DB;

-- Departments

INSERT INTO department (name) VALUES ('User Experience');
INSERT INTO department (name) VALUES ('Development');
INSERT INTO department (name) VALUES ('Information Technology');
INSERT INTO department (name) VALUES ('Human Resources');

-- Roles

INSERT INTO role (title, salary, department_id) VALUES ("UX Designer", 58000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("UX Researcher", 58000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("UI Designer", 56000, 1);

INSERT INTO role (title, salary, department_id) VALUES ("Front-End Developer", 63000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Back-End Developer", 63500, 2);

INSERT INTO role (title, salary, department_id) VALUES ("Hardware Technician", 63000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Help Desk Support", 63500, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Network Administrator", 66500, 3);

INSERT INTO role (title, salary, department_id) VALUES ("Talent Management", 72000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Compensation", 68500, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Training", 66500, 4);

-- Employees

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dave", "Powell", 1, 1); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "Hammer", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Guy", "Briggs", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dave", "Gillem", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Resnowski", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Leon", "Gaban", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dana", "Walters", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Troy", "Whitsett", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "Harrison", 4, 3);