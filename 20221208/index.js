const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: '1234', //세션 암호화를 할 임의의 문자열 
    resave: false, //세션에 변경사항이 없는 요청에도 세션을 다시 저장을 할건지
    saveUninitialized: true, //초기화되지 않은 세션의 저장여부
    /*cookie:{ //세션 ID 쿠키에 대한 옵션
        httpOnly: true 
    },
    secure: false */
}));

const user = {id:"abc", pw:"1234"}

app.get("/",(req,res)=>{
    if(req.session.user) res.render("session2", {isLogin:"on"});
    else res.render("session", {isLogin:"off"});
});

app.post("/login", (req,res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id;
        console.log(req.session);
        res.send(req.session.user);
    }
    else res.send(true);
    
});

app.delete("/login", (req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        else {
            console.log(req.session);
            res.send(true);
        }
    });
});

app.listen(port, ()=>{
    console.log("sever open", port);
});