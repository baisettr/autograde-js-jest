module.exports = {
    query1: {
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return the number of users'
    },
    query2: {
        query: 'Select count(*) from user',
        score: 1,
        desc: 'return inserted count'
    },
    query3: {
        query: 'Select count(*) from user where NAME = "test1a"',
        score: 1,
        desc: 'return update count'
    },
    query4: {
        query: 'Select count(*) from user',
        score: 1,
        desc: 'return update count'
    },
    query5: {
        query: 'Select count(*) from user',
        score: 1,
        desc: 'return all users'
    }
}