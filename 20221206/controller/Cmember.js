const { Member } = require("../model");

exports.home = (req, res)=>{res.render('home');}

exports.login = async (req, res)=>{
    let result = await Member.findAll({ 
        where: {id: req.query.id}, 
        limit: 1
    });
    res.send(result[0]);
}

exports.register = async (req,res)=>{
    let result = await Member.create({
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name  
    });
    console.log(result);
    res.send(true);
}

exports.modify = async (req,res)=>{
    let updateData = {
        pw: req.body.pw,
        name: req.body.name
    }
    let result = await Member.update(updateData, {
        where: {id: req.body.id}
    });
    console.log(result);
    res.send(true);
}

exports.delete = async (req,res)=>{
    let result = await Member.destroy({
        where: {id: req.body.id}
    });
    console.log(result);
    res.send(true);
}