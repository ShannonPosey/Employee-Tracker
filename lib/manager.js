const { promptUser} = require("../index");
const inquirer = require("inquirer");
const mysql = require("mysql2");
// const db = require("../db/connection");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "xM9VBi8@HrD7",
        database: "employee"
    },
    // console.log("Connected to the employee database.")
);


const viewManager = () => {
    connection.query(
        `SELECT * FROM manager`,
        function (err, results, field) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);
            promptUser();
        }
    )
}

const addManager = () => {
    `INSERT INTO manager (first_name, last_name)
    `,connection.query(
    function (err, result, field) {
        if (err) {
            console.log(err.message);
        }
        console.log("Manager has been added!");
    }
    )
};

module.exports = {viewManager, addManager};