const { promptUser} = require("../index");
const inquirer = require("inquirer");
const db = require("../db/connection");


const viewManager = () => {
    db.query(
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
    SELECT first_name, last_name FROM employee
    WHERE manager_confirm = 1`,
    db.query(
    function (err, result, field) {
        if (err) {
            console.log(err.message);
        }
        console.log(" ");
    }
    )
};

module.exports = {viewManager, addManager};