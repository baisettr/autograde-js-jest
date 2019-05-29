const mysql = require('mysql');

const options = {
    host: 'IP',
    user: "xxxx",
    password: "xxxx",
    database: 'xxxx'
}

let connection = mysql.createConnection(options);

function runQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, null, (error, row, fields) => {
            //console.log(error, row)
            if (error) {
                resolve('Error');
            } else {
                resolve(row);
            }
        })
    })
}

module.exports = { connection, runQuery };