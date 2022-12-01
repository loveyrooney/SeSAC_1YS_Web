const Visitor = require("../model/visitor");

exports.visitor = (req, res)=>{
    Visitor.get_visitor(function(result){
        console.log(result);
        res.render('visitor', {data:result});
    });
    
}

exports.register = (req, res)=>{
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id));
    });
}