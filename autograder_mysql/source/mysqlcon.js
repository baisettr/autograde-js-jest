const mysql = require('mysql');

const options = {
    host: 'localhost',
    user: "test",
    password: "test",
    database: 'test',
    multipleStatements: true
}

let connection = mysql.createConnection(options);

function runQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, null, (error, row, fields) => {
            //console.log(error.sqlMessage, typeof row)
            if (error) {
                resolve('Error');
            } else {
                resolve(row);
            }
        })
    })
}

module.exports = { connection, runQuery };