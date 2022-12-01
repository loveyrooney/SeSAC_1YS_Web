const express = require('express');
const app = express();
const port = 8000; 

app.set('view engine', 'ejs');
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//자동으로 이 폴더 안에 있는 index.js를 찾아감. 특정하려면 파일명까지 써두면됨.
const router = require("./routes"); 
app.use('/', router);               

app.get('*', (req, res)=>{ //라우터 접근 에러안내 페이지는 가장 마지막에 써야 한다. 
    res.send('error');
});

app.listen(port, ()=>{
    console.log("sever open:", port);
});
