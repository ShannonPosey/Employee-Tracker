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



// View departments in table
const viewDepart = () => {
    connection.query(
        `SELECT * FROM departments`,
        function(err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);
            promptUser();
        }
    );
};

const addDepart = () => {
    inquirer
    .prompt(
        {
            type: "text",
            name: "add_depart",
            message: "Please enter the name of the department you want to add:"
        }
    )
    .then((data) => {
        connection.query(
            `INSERT INTO department (department_name)
            VALUES (?)`,
            [data.add_depart],
            function(err, result, field) {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log("Department has been added!");
                promptUser();
            }
        )
    });
};

module.exports = {viewDepart, addDepart};