const Connection = require('./con');

function runQuery(query) {
    return new Promise((resolve, reject) => {
        Connection.query(query, null, (error, row, fields) => {
            if (error) {
                resolve('Error');
            } else {
                resolve(row);
            }
        })
    })
}

function query1() {
    return new Promise((resolve, reject) => {
        Connection.query("Select count(*) from user", null, (error, row, fields) => {
            if (error) {
                resolve('Error');
            } else {
                resolve(row);
            }
        })
    })
}

module.exports = { runQuery, query1 };

