const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '@sesac07',
    database: 'table1'
});

cnn.query('insert into user values("f","oh","40");', (err, result)=>{
    if (err) throw err;
    console.log(result);
});