/**
 * Created by strive-智能社 on 2016/9/25.
 */
const mysql=require('mysql');

var db=mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '123456',
    database:   '2016-9-25'
});

module.exports=db;





































