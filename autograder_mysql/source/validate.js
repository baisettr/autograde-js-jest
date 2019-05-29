module.exports = {
    query1: {
        query: 'Select count(*) from user',
        score: 2,
        desc: 'return the number of users'
    },
    query2: {
        query: 'Select ADMIN from user where EMAILADDRESS = "rk1@gmail.com"',
        score: 1,
        desc: 'return all users'
    }
}