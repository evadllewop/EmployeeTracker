require('dotenv').config();
// const db = require('db');
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({

    port: 3306,
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,

});

// console.log(process.env);
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();

});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "Add new employee",
                "Remove employee",
                "View all departments",
                "Add department",
                "Remove department",
                "View all roles",
                "Add role",
                "Remove role",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.choice) {

                case "View all employees":
                    allEmployees();
                    break;

                case "Add new employee":
                    addEmployee();
                    break;

                case "Remove employee":
                    removeEmployee();
                    break;

                case "View all departments":
                    allDept();
                    break;

                case "Add department":
                    addDept();
                    break;

                case "Remove department":
                    removeDept();
                    break;

                case "View all roles":
                    allRoles();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Remove role":
                    removeRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

////////////  VIEW   ////////////

// View all employees
function allEmployees() {

    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all departments
function allDept() {

    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all roles
function allRoles() {

    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

////////////  ADD  ////////////

// Add new employee
function addEmployee() {

    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "Enter employee's first name"
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter employee's last name"
        },
        {
            name: "role_id",
            type: "input",
            message: "Enter employee's role id"
        },
        {
            name: "manager_id",
            type: "input",
            message: "Enter employee's manager id"
        },
    ])
        .then(function (answer) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
                if (err) throw err;
                console.log('EMPLOYEE SUCCESSFULLY ADDED');
                start();
            });
        })
}

// Add new department
function addDept() {

    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter department name"
        },
    ])
        .then(function (answer) {
            connection.query("INSERT INTO department (name) VALUES (?)", [answer.name], function (err, res) {
                if (err) throw err;
                console.log('DEPARTMENT SUCCESSFULLY ADDED');
                start();
            });
        });
}

// Add new role
function addRole() {

    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Enter role title"
        },
        {
            name: "salary",
            type: "input",
            message: "Enter role salary"
        },
        {
            name: "department_id",
            type: "input",
            message: "Enter department id"
        },
    ])
        .then(function (answer) {
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function (err, res) {
                if (err) throw err;
                console.log('ROLE SUCCESSFULLY ADDED');
                start();
            });
        });
}

////////////  REMOVE  ////////////

// Remove employee
function removeEmployee() {

    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "id",
                type: "list",
                message: "Select employee to remove",
                choices: function () { // retrieve all employees and list them as options
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push({ name: res[i].first_name + " " + res[i].last_name, value: res[i].id });
                    }
                    return choiceArray;
                }
            }
        ])

            .then(function (answer) {

                connection.query("DELETE FROM employee WHERE id = ?", answer.id, function (err, res) {
                    if (err) throw err;
                    console.log('EMPLOYEE SUCCESSFULLY DELETED');
                    start();
                });
            })

    });
}

// REMOVE department
function removeDept() {

    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;


        inquirer.prompt([
            {
                name: "id",
                type: "list",
                message: "Select department to remove",
                choices: function () { // retrieve all departments and list them as options
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push({ name: res[i].name, value: res[i].id });
                    }
                    return choiceArray;
                }
            }
        ])

            .then(function (answer) {

                connection.query("DELETE FROM department WHERE id = ?", answer.id, function (err, res) {
                    if (err) throw err;
                    console.log('DEPARTMENT SUCCESSFULLY DELETED');
                    start();
                });
            })

    });
}

// Remove role
function removeRole() {

    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;


        inquirer.prompt([
            {
                name: "id",
                type: "list",
                message: "Select role to remove",
                choices: function () { // retrieve all roles and list them as options
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push({ name: res[i].title, value: res[i].id });
                    }
                    return choiceArray;
                }
            }
        ])

            .then(function (answer) {

                connection.query("DELETE FROM role WHERE id = ?", answer.id, function (err, res) {
                    if (err) throw err;
                    console.log('ROLE SUCCESSFULLY DELETED');
                    start();
                });
            })

    });
}
