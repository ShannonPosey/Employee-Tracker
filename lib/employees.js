const { promptUser} = require("../index");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("../db/connection");
const {viewManager, addManager} = require("./manager");





const viewEmployees = () => {
    db.query(
        `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary AS salary, manager.first_name AS manager, department.name AS department
        FROM employee
        LEFT JOIN roles on employees.roles_id = roles.id LEFT JOIN department on employees.department_id = department.id
        LEFT JOIN manager on employees.manager_id = manager.id`,
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

const addEmployee = () => {
      db.query(
          `SELECT * FROM roles`,
          function (err, results, fields) {
              if (err) {
                  console.log(err);
                  return;
              }
              // empty array for the roles to be stored in 
              let rolesArray = [];

              results.forEach(item => {
                  rolesArray.push(item.name)
              });
          }
        )
    db.query(
        `SELECT * FROM manager`,
        function (err, results, field) {
            if (err) {
                console.log(err);
                return;
            }
            // empty array for the managers to be stored i 
            let managerArray = [];

            results.forEach(item => {
                managerArray.push(item.name)
            });
            inquirer
            .prompt([
                {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role_choice",
            message: "What is the role for the new employee?",
            // will be able to chose from pre-populated roles
            choices: rolesArray
        },
        {
            type: "confirm",
            name: "confirmManager",
            message: "Is the new employee's role a manager positions?"
        },
        {
            type: "list",
            name: "manager_choice",
            message: "Who will your employee manager be?",
            when: ({confirmManager}) => {
                if (!confirmManager) {
                    return true;
                }
                else {
                    return false;
                }
            },
            choices: managerArray
        }
    ])
            .then((data) => {
                let role_id;
                for(let i = 0; i < rolesArray.length; i++) {
                    if (role_choice[i] === rolesArray[i]) {
                        role_id = i + 1;
                    }
                }

                let manager_confirm;
                if (data.manager_confirm === true) {
                    manager_confirm = 1;
                }
                else {
                    manager_confirm =0;
                }
                let manager_id;

                if (!data.manager_id) {
                    manager_id = null;
                }
                else {
                    for (i = 0; i < managerArray.length; i++) {
                        manager_id = i + 1;
                    }
                }
                db.query(
                    `INSERT INTO employee (first_name, last_name, role_id, manager_id, manager_confirm)
                    VALUES (?, ?, ?, ?, ?)`, 
                    [data.first_name, data.last_name, role_id, manager_id, manager_confirm],
                    function (err, results, field) {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        addManager();
                        console.log("Employee has been successfully added!");
                        promptUser();
                    }
                )

            });

        }
    );
};


module.exports = {viewEmployees, addEmployee};