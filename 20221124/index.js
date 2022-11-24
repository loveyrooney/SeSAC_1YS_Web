const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true})); 
app.use(express.json());

app.get('/', (req, res)=>{
    res.render("activeform");
});

app.get("/activeGet", (req, res)=>{  
    console.log(req.query); 
    res.send("get name is: " + req.query.name);
});

app.post("/activeGet", (req, res)=>{  
    console.log(req.body); 
    res.send({msg: `post name is: ${req.body.name}`}); 
    //fetch 사용시 제이슨 형식으로 샌드내용 추가.
});

//실습
app.get("/prac", (req, res)=>{
    res.render("activepractice");
});

app.get("/activeprac", (req, res)=>{
    console.log(req.query);
    res.send(`${req.query.name}님 반갑습니다!`);
});

app.post("/activeprac", (req, res)=>{
    console.log(req.body);
    const id = "go1";
    const pw = "1234";  
    if(req.body.id !== id){
        res.send("<p style='color:red'>id가 없습니다</p>"); //send에는 태그를 적용할 수 있다!
    } else if(req.body.pw !== pw){
        res.send("<p style='color:red'>password가 틀렸습니다</p>");
    } else {
        res.send(`<p style='color:blue'>${req.body.id}님 반갑습니다!</p>`);
    }
});
/* 이 방식은 fetch로는 사용 불가능. 왜냐 msg의 value로 샌드내용이 들어가기 때문에 그건 태그 적용 못할것. 
언제 ajax 쓰고 언제 axios 쓰고 언제 fetch 쓸지 잘 생각해야 할 것 같다. 
ajax 순수js로 하는 방법도 공부할것: https://cocobi.tistory.com/121 */


app.listen(port, ()=>{
    console.log("sever open :", port);
});
