const mysql = require('mysql');

const options = {
    host: 'localhost',
    user: "gradeAdmin",
    password: "gradePassword",
    database: 'grade',
    multipleStatements: true
}

let connection = mysql.createConnection(options);

function runQuery(query, state = false) {
    return new Promise((resolve, reject) => {
        connection.query(query, null, (error, row, fields) => {
            //console.log(error.sqlMessage, typeof row)
            if (error) {
                resolve('Error');
            } else {
                //console.log(row);
                res = row.length ? state ? row[0]['count(*)'] : row : row.affectedRows
                //console.log(res);
                resolve(res);
            }
        })
    })
}

module.exports = { connection, runQuery };