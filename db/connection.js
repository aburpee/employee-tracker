const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_database'
    },
    console.log('connected to the employee database')
);

module.exports = db;