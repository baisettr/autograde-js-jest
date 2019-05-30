module.exports = {
    query1: {
        query: 'Select count(*) from user'
    },
    query2: {
        query: "insert into user(ID,NAME,AGE) values (1,'test1',23), (2,'test2',24)"
    },
    query3: {
        query: "update user set NAME = 'test1a' where ID = 1"
    },
    query4: {
        query: "update user set NAME = 'test1a' where ID = 1"
    },
    query5: {
        query: "delete from user where NAME = 'test2'"
    },
    query6: {
        query: 'Select count(*) from user'
    }
}