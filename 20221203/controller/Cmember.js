const Member = require('../model/member');

exports.home = (req, res)=>{res.render('home');}

exports.login = (req, res)=>{
    Member.login(req.query, (rows)=>{
        res.send(rows);
    });
}

exports.register = (req,res)=>{
    Member.register(req.body, ()=>{
        res.send(true);
    });
}

exports.modify = (req,res)=>{
    Member.modify(req.body, ()=>{
        res.send(true);
    });
}