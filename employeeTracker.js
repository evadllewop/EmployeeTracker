const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Life2021!",
    database: "employeeTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startPrompt();
});

// function which prompts the user for what action they should take
function startPrompt() {
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "Add new employee",
                "Remove employee",
                "Update employee role",
                "Update employee manager"]
        })
        .then(function (answer) {
            switch (answer.action) {

                case "View all employees":
                    allEmp();
                    break;

                case "View all employees by department":
                    empByDept();
                    break;

                case "View all employees by manager":
                    empByMan();
                    break;

                case "Add new employee":
                    addEmp();
                    break;

                case "Remove employee":
                    removeEmp();
                    break;

                case "Update employee role":
                    updateEmpRole();
                    break;

                case "Update employee manager":
                    updateEmpManager();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

function allEmp() {

    console.log("Viewing all employees...\n");
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });



}

