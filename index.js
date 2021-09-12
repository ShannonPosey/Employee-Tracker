const inquirer = require("inquirer");
const db = require("./db/connection");

const promptUser = () => {
    return inquirer
    .prompt([
       {
           type: "list",
           name: "selection",
           message: "What would you like to do?",
           choices: ["View all departments", " View all roles", "View all employees", "Add a department", "Add a Role", "Add an employee", "Update an employee role"]
        }
    ])
}