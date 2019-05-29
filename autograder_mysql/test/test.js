const qs = require('../source/queries');
const qp = require('../source/validate');
const { connection, runQuery } = require('../source/mysqlcon');

//describe('in 1', () => {
beforeAll(async () => {
    await connection.connect();
});

afterAll(async () => {
    await connection.end();
})

const qsKeys = Object.keys(qp);

qsKeys.map((q) => {
    const studentQuery = qs[q]['query'];

    const { query, score, desc } = qp[q];
    let ques = { desc, score };
    let tesDesc = JSON.stringify(ques);

    return test(tesDesc, async () => {
        let result = await runQuery(query)
        await expect(runQuery(studentQuery)).resolves.toEqual(result)
    })
})


/* it('tests error with async/await and rejects', async () => {
    expect.assertions(1);
    await expect(qy.runQuery(qs.query1)).rejects.toEqual('Error');
    //expect(1).toEqual(2);
}); */

//})

