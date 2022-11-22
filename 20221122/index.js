const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

//미들웨어 생성 use(클라이언트의 접근을 허용할 가상경로, express.static("접근허용할 폴더명"))
app.use("/static", express.static("static"));
//app.use(express.static("static")) 이경우 해당 폴더로 바로 접근가능. src ="/img/bal.jpg"

app.use(express.urlencoded({extended:true})); //form의 여러가지 타입 중 해당 타입을 해석한다는 뜻.
app.use(express.json()); //클라이언트가 보내는 데이터 제이슨 형태(딕셔너리와비슷)로 파싱하겠다. 


// get(라우트주소, 함수)
app.get('/', (req, res)=>{   //포트번호로만 들어왔을때 기본화면. 슬래시 다음에 추가하면 그 주소로 보여주는화면.
    res.send("hello express");
});

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
}); //서버 껐다 켜지 않아도 html파일 수정된 것은 새로고침해서 반영. but 이 js 파일을 수정했을경우 서버 껐다켜야됨.

app.get('/ejs', (req, res)=>{
    res.render("index", {  //views 폴더를 기본으로 설정했고, ejs를 엔진으로 했으니 index.ejs 자동 검색
        title:"this is index page.", //render(필수인자(파일), 선택인자(객체))
        data: ['a', 'b', 'c']    
    }); 
});

app.get("/form", (req, res)=>{  
    res.render("form");
});

app.get("/getForm", (req, res)=>{  //클라이언트에서 폼이전송되면 원래 있던 페이지에서 여기로 변경되는거.
    console.log(req.query); //input에 적을 내용을 url에 직접 적어도 접근가능
    res.send("get request success!");
});

app.post("/postForm", (req, res)=>{  //클라이언트에서 폼이전송되면 원래 있던 페이지에서 여기로 변경되는거.
    console.log(req.body);  //post로 받을 경우 url에서 portForm에 접근 불가능
    res.render("result", {
        title: "Post 요청 확인",
        data: req.body
    });
});

//실습
app.get('/img', (req, res)=>{
    res.render("imgpractice", {
        array: ['../static/img/bal1.jpg', '../static/img/bal2.jpg', '../static/img/bal3.jpg']
    });
});

app.get('/formpractice', (req, res)=>{
    res.render("formpractice");
});

app.get('/getPractice',(req, res)=>{
    console.log(req.query);
    res.send("get success!");
});

app.post('/postPractice', (req, res)=>{
    console.log(req.body);
    res.send("post success!");
});

app.listen(port, ()=>{
    console.log("sever oopen :", port);
});
