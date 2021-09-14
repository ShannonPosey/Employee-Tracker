const { promptUser} = require("../index");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connection");

const viewManager = () => {

}

const addManager = () => {
    `INSERT INTO manager (first_name, last_name)
    `,
    function (err, result, field) {
        if (err) {
            console.log(err.message);
        }
        console.log("Manager has been added!");
    }
};

module.exports = {viewManager, addManager};