DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

-- Department Table

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Role Table

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  department_id INT(1) NOT NULL,
  PRIMARY KEY (id)
);

-- Employee Table

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(1) NOT NULL,
  manager_id INT(1),
  PRIMARY KEY (id)
);
