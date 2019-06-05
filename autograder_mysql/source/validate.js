module.exports = {
    query1: {
        record: 'SELECT',
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return the number of users'
    },
    query2: {
        record: 'INSERT',
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return inserted count',
        value: 2
    },
    query3: {
        record: 'UPDATE',
        query: 'Select count(*) from user where NAME = "test1a"',
        score: 1,
        desc: 'return update count',
        value: 1
    },
    query4: {
        record: 'UPDATE',
        query: 'Select count(*) from user',
        score: 1,
        desc: 'return update count',
        value: 1
    },
    query5: {
        record: 'DELETE',
        query: 'Select count(*) from user where NAME = "test2"',
        score: 1,
        desc: 'return delete count',
        value: 0
    },
    query6: {
        record: 'SELECT',
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return all users'
    }
}