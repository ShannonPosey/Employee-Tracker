const inquirer = require("inquirer");
const db = require("./db/connection");
const {viewRoles, addRole} = require("./lib/roles");

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
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            case "":
                // function();
                break;
            default
        }
    })
};

module.exports = promptUser;

promptUser();