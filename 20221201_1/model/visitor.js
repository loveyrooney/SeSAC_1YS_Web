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

exports.delete_visitor = (id, cb)=>{
    var sql = `delete from visitor where id=${id}`;

    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("delete result:", result);
        cb();
    });
}

exports.get_visitor_by_id_model = (id, cb)=>{
    var sql = `select * from visitor where id=${id}`;

    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log("select by id:", rows);
        cb(rows[0]);
        //id로 불러왔기 때문에 한 행일테지만,그냥 rows로 놓으면 undifiend 뜸
    });
}

exports.update_visitor_model = (info, cb)=>{
    var sql = `update visitor set name='${info.name}' ,comment='${info.comment}' where id=${info.id}`;

    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("update result:", result);
        cb();
    });
}