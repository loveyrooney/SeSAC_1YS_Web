const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8000; 

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            console.log('filename: ', req.body); //파일을 올리기 전에 있던 정보까지만 받음
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
})

app.get('/file', (req,res)=>{
    res.render('file');
})

//multer 미들웨어 사용 - 한번에 한 개의 파일을 보낼 경우
//single함수 인자는 클라이언트가 업로드하는 인풋의네임.
app.post('/upload', upload.single('userfile'), (req, res)=>{
    console.log(req.file);
    console.log(req.body); //여기는 싱글함수 처리된 후의 내용이므로 모든 내용을 받음
    res.send('upload complete');
});
//복수 개의 파일을 보낼 경우
app.post('/upload-array', upload.array('userfile'), (req, res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send('multiple upload complete');
});
//한 개씩 여러 번을 보낼 경우
app.post('/upload-fields', upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]), (req, res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send('fields upload complete');
});

//미들웨어는 클라이언트와 서버 중간에서 실행. 
app.get("/", test,test2, (req, res)=>{
    console.log('hello');
    res.send('hello');
});
function test(req, res, next){  
    console.log(req.query);
    console.log('this is test');
    next();                     //next함수를 쓰지 않으면 다음단계로(서버단계로) 안넘어감.
}
function test2(req, res, next){   //미들웨어에 여러개의 함수를 사용할 수 있음.
    console.log('this is test2');
    next();
}

//실습
app.post('/info', upload.single('profile'), (req, res)=>{
    console.log(req.file);
    console.log(req.body); 
    res.render('info',{
        userid: req.body.id,
        ext: path.extname(req.file.originalname)  //path로 보내도 됨 변수보내는연습할려고이렇게해봄
    }); 
});

app.post('/info2', upload.single('profile2'), (req, res)=>{
    console.log(req.body); 
    res.send({path: req.file.path}); //여기도 유저아이디랑 확장자로보내도 됨
});

app.listen(port, ()=>{
    console.log('sever open:', port);
});