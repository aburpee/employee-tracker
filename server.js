const db = require('./db/connection');
const inquirer = require('inquirer');


db.connect(err => {
    console.log('db connected')
});

function choices() {
    inquirer
        .prompt({
            name: 'selection',
            type: 'list',
            message: 'what operation would you like to perform',
            choices: [
                'view all roles',
                'view all employees',
                'view all departments',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role',
                'exit'
            ]
        }).then(function() {
            if (choices === 'view all roles') {
                viewAllRoles();
            }
            if (choices === 'view all employees') {
                viewAllEmployees();
            }
            if (choices === 'view all departments') {
                viewAllDepartments();
            }
        })
}


function viewAllDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        choices();
    })

}

function viewAllRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        choices();
    })
}

function viewAllEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        choices();
    })

}

function addDepartment() {


}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

choices();