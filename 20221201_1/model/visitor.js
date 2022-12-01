const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '@sesac07',
    database: 'table1'
});


exports.get_visitor = (cb)=>{
    var sql = 'SELECT * FROM visitor';
    
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log("visitors:", rows);
        cb(rows);
    });
}

exports.register_visitor = (info, cb)=>{
    var sql = `INSERT INTO visitor(name,comment) values('${info.name}','${info.comment}')`;

    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("visitors:", result);
        cb(result.insertId);
    });
}