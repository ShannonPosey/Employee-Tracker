const { promptUser} = require("../index");
const inquirer = require("inquirer");
const db = require("../db/connection");


// view roles list in the table
const viewRoles = () => {
  db.query(
        `SELECT roles.id, roles.title, roles.salary, department.name
        FROM roles
        LEFT JOIN department
        ON roles.department_id = department.id `,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);
            promptUser();
        }
    );
};

// add roles to table
const addRole = () => {
    db.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err);
                return;
            }
            let depArray = [];
            results.forEach(item => {
                depArray.push(item.name)
            })
            inquirer
            .prompt(
                {
                    type: "input",
                    name: "role_title",
                    message: "Please enter role you would like to add"
                },
                {
                    type: "number",
                    name: "salary",
                    message: "Please enter the salary for this role."
                },
                {
                    type: "list",
                    name: "department",
                    message: "Please select the department for this role:",
                    // will be able to chose from pre-populated departments
                    choices: depArray
                }
            )
            .then((data) => {
                let department_id;

                for(let i = 0; i < depArray.length; i++) {
                    if (depArray[i] === data.department) {
                        department_id = i + 1;
                    };
                };

                db.query(
                    `INSERT INTO roles (title, salary, department_id)
                    VALUES (?, ?, ?)`,
                    [data.role_title, data.salary, department_id],
                    function (err, results, fields) {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        console.log("Role has been add!");
                        promptUser();
                    }
                );
            });
        }
    );
};

module.exports = {viewRoles, addRole};