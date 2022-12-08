const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res)=>{
    res.send("hello cookie");
});

const option = {
    httpOnly: true, //true일 경우 자바스크립트 document.cookies로 접근 불가
    maxAge: 30000, //만들어진 순간부터 밀리세컨드 단위의 만료기한
    //expires: "2022-12-08T17:00:00" , GMT 시간을 사용해 만료일을 지정
    //path: "/a", 경로지정이 된 부분에서만 쿠키생성 default는 '/'
    //secure: false, https 보안서버에서만 적용
    //signed: true 쿠키의 암호화 default는 false
}

//쿠키가 없는 클라이언트에 쿠키를 설정할 때
app.get("/set", (req,res)=>{
    //쿠키는 인자 3개. 키, 밸류, 옵션객체(만료와 관련)
    res.cookie("test","1", option);  //쿠키가 생성되는 지점은 브라우저이므로 서버 리셋 여부와 상관없음
    res.send("cookie success!");
});

//이미 쿠키가 생성된 클라이언트로부터 쿠키 가져올 때
app.get("/get", (req,res)=>{
    console.log(req.cookies.test);
    res.send(req.cookies); //req.cookies는 딕셔너리 형태로 키:밸류를 가져옴
});

//실습
app.get("/cprac",(req,res)=>{
    if(req.cookies.pop) res.render("index", {pop:"none"});
    else res.render("index", {pop:"display"});
});

app.post("/cset", (req,res)=>{
    res.cookie("pop","2", {httpOnly: true, maxAge: 30000,});
    res.send(true);
});

app.listen(port, ()=>{
    console.log("sever open", port);
});