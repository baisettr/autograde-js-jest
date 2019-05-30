module.exports = {
    query1: {
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return the number of users'
    },
    query2: {
        query: 'Select count(*) from user where NAME = "test1"',
        score: 1,
        desc: 'return inserted user'
    },
    query3: {
        query: 'Select count(*) from user',
        score: 1,
        desc: 'return all users'
    }
}