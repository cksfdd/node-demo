const mysql=require('mysql');

var db=mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '123456',
    database:   '2016-9-25'
});

module.exports=db;





































