const Visitor = require("../model/visitor");

exports.visitor = (req, res)=>{
    Visitor.get_visitor(function(result){
        res.render('visitor', {data:result});
    });
    
}

exports.register = (req, res)=>{
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id));
    });
}

exports.delete = (req, res)=>{
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true); //아무것도 하지 않더라도 응답은 항상 보내야 한다.
    });
}

exports.get_visitor_by_id = (req,res)=>{
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });
}

exports.update_visitor = (req,res)=>{
    Visitor.update_visitor_model(req.body, function(){
        res.send(true);
    });
}