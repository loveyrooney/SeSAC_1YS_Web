const model = require('../model/test');
const model2 = require('../model/user');

exports.main = (req, res)=>{
    res.render("index");
}

exports.test = (req, res)=>{
    let hi = model.hello();
    res.send(hi + " this is test");
}

exports.post = (req, res)=>{
    res.send("hello post");
}

//실습
exports.prac = (req, res)=>{
    res.render("activepractice");
}

exports.activeget = (req, res)=>{
    console.log(req.query);
    res.send(`${req.query.name}님 반갑습니다!`);
}

exports.activepost = (req, res)=>{
    console.log(req.body);
    let info = model2.info();
    if(req.body.id !== info.id){
        res.send("<p style='color:red'>id가 없습니다</p>"); 
    } else if(req.body.pw !== info.pw){
        res.send("<p style='color:red'>password가 틀렸습니다</p>");
    } else {
        res.send(`<p style='color:blue'>${req.body.id}님 반갑습니다!</p>`);
    }
}

exports.activepost2 = (req, res)=>{
    let users = model2.user();
    let array = users.split("\n");
    let loginFlag = false;
    let name = "";
    for(let i=0; i<array.length; i++){
        let member = array[i].split("//");
        if(req.body.id !== member[0]){
            res.send("<p style='color:red'>id가 없습니다</p>"); 
            break;
        }
        else if (req.body.id == member[0] && req.body.pw == member[1]){
            loginFlag = true;
            name = member[2];
            res.send(`${name}님 환영합니다.`);
            break;
        } else {
            res.send("<p style='color:red'>password가 틀렸습니다</p>");
            break;
        }
    }
}

//이거 수정해야함