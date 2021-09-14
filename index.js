const inquirer = require("inquirer");
const db = require("./db/connection");
const {viewRoles, addRole} = require("./lib/roles");
const { viewDepart, addDepart} = require("./lib/department");
const {viewEmployees, addEmployee} = require("./lib/employees");

const promptUser = () => {
    inquirer
    .prompt([
       {
           type: "list",
           name: "selection",
           message: "What would you like to do? (Please Chose from the list below.",
           choices: ["View all departments", " View all roles", "View all employees", "Add a department", "Add a Role", "Add an employee", "Update an employee role"]
        }
    ])
    .then((data) => {
        switch (data["selection"]) {
            case "View all Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View all Department":
                viewDepart();
                break;
            case "Add Department":
                addDepart();
                break;
            case "View all Roles":
                viewRoles();
                break;
            case "Add roles":
                addRole();
                break;
            case "View all Managers":
                // function();
                break;
            case "Add Managers":
                // function();
                break;
            default
        }
    })
};

module.exports = promptUser;

promptUser();