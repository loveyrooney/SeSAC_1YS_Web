const { Visitor } = require("../model"); //모델 인덱스 파일에서 정의한 db중 Visitor만 불러옴.
//const Visitor = require("../model/Visitor");

exports.visitor = async (req, res) => { //await은 promise 객체에만 적용된다.
    let result = await Visitor.findAll(); //select * 에 해당하는 시퀄라이저 함수
    res.render("visitor", {data: result});

    /* 시퀄라이저 쓸 때 (promise방식) 
        Visitor.findAll().then((result)=>{
        console.log(result);
        //console.log(result[0].id) 하면 id만 출력할수 있다.
        res.render("visitor", {data: result});
    }); */

    /* 시퀄라이저 안쓰고 할 때 (콜백함수 방식)
        Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor", {data: result});
    }) */
}

exports.register = async (req, res) => {
    let data = {   //insert에 추가될 내용을 객체로 만든다
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data); //insert 에 해당하는 시퀄라이저 함수 
        console.log(`register: ${result}`);
        res.send(result); //시퀄라이저로 가져올시 모든 컬럼 다 가져올수있음.

    /* Visitor.register_visitor( req.body, function(id){
        console.log(id);
        res.send(String(id));
    }) */
}

exports.delete = async (req, res) => {
    let result = await Visitor.destroy({
        where: {id:req.body.id}
    }); 
        console.log(result); //성공여부 0/1로 나옴
        res.send(true);
    /* Visitor.delete_visitor(req.body.id, function(){
        res.send(true);
    }) */
}

exports.get_visitor_by_id = async (req, res) => {
    let result = await Visitor.findOne({  
        /* findAll로도 사용가능. All은 limit: 1을 걸어야하고, 배열타입으로 리턴하기 때문에 result[0]해줘야됨
        즉 findOne은 {id:"bla", name:"bla", comment:"bla"}로 리턴
        findAll은 [{id:"bla", name:"bla", comment:"bla"}]로 리턴하는 것임
        /* attributes: ["name", "comment"] 이런식으로 하면 원하는 컬럼만 가져오기 가능
        order: [["id", "desc"]] */
        where : { id: req.query.id},
        limit: 1
    });
    res.send(result); 

    /* Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows); 
    }); */
}

exports.update_visitor = async (req, res) => {
    let data2 = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.update(data2, {    //바꿀 내용(객체), 조건을 인자로 받는다
        where: {id:req.body.id}
    });
    console.log(result); //성공여부 0/1로 나옴. 
    res.send(true);

    /* Visitor.update_visitor(req.body, function(){
        res.send(true);
    }); */
}