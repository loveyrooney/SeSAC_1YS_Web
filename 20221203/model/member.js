const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '@sesac07',
    database: 'table1'
});

exports.login = (query, cb)=>{
    var sql = `SELECT * FROM member where id='${query.id}'`;
    
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log("member:", rows);
        cb(rows[0]);
    });
}

exports.register = (body, cb)=>{
    var sql = `INSERT INTO member(id,pw,name) values('${body.id}','${body.pw}','${body.name}');`;
    
    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("new member:", result);
        cb();
    });
}

exports.modify = (body, cb)=>{
    var sql = `UPDATE member set pw='${body.pw}', name='${body.name}' where id='${body.id}'`;
    
    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("update:", result);
        cb();
    });
}