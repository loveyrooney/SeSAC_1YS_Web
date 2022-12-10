const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

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

//메인 페이지를 따로 설정
app.get("/",(req,res)=>{
    console.log(req.session.user);
    if(req.session.user) res.render("se", {isLogin: true, id:req.session.user});
    else res.render("se", {isLogin: false}); 
});

//로그인 페이지를 따로 설정
app.get("/login", (req,res)=>{
    res.render("login");
});

//로그인 후의 상황은 동적 폼 전송
app.post("/login", (req,res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id;
        res.send(true);
    } else {
        res.send(false);
    }
});

//로그아웃을 백에서 페이지 변경하는 방법도 있고, 프론트에서 동적으로 변경하는 방법도 있음
app.get("/logout", (req,res)=>{ 
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect("/"); //메인페이지 새로고침하는 함수
    });
});

/* 내가 만들었던 기존 실습 이거 반영해서 만들어보기
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
*/

app.listen(port, ()=>{
    console.log("sever open", port);
});