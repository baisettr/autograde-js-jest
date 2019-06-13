const qs = require('../source/inputQueries.json');
const qp = require('../source/validate');
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile);
const { connection, runQuery } = require('../source/mysqlcon');


beforeAll(async () => {
    try {
        await connection.connect();
        const res = await readFileAsync('./source/initial.sql');
        let initSql = await res.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, ' ');
        await runQuery(initSql);
    } catch (err) {
        console.log(err);
    }
});

afterAll(async () => {
    try {
        const res = await readFileAsync('./source/final.sql');
        let finalSql = await res.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, ' ');
        await runQuery(finalSql);
        await connection.end();
    } catch (err) {
        console.log(err);
    }
});

const qsKeys = Object.keys(qp);

qsKeys.map((q) => {
    const key = q + '.sql';
    //console.log(key);
    const studentQuery = qs[key];
    //console.log(studentQuery);

    const { query, score, desc, record, value } = qp[q];
    let ques = { desc, score };
    let tesDesc = JSON.stringify(ques);

    return test(tesDesc, async () => {
        let result = await runQuery(studentQuery);
        switch (record) {
            case 'SELECT':
                return expect(runQuery(query)).resolves.toEqual(result)
                break
            case 'INSERT':
                return expect(runQuery(query, true)).resolves.toEqual(value)
                break
            case 'UPDATE':
                return expect(runQuery(query, true)).resolves.toEqual(value)
                break
            case 'DELETE':
                return expect(runQuery(query, true)).resolves.toEqual(value)
                break
            default:
                break
        }
    })
});

