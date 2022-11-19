const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){
    /* res.write("<h1>hello</h1>"); 서버 열면 이 내용 읽을 것이다. 
    res.end("<hr>");  //엔드를 추가하지 않으면 브라우저가 계속 로딩상태가 된다. */
    fs.readFile('./cafe.html')
    .then(function(data){
        res.end(data.toString());
    });
});

//server.on() 이벤트 등록 함수
//server.listen() 서버실행, 클라이언트 기다림

server.listen(8080, function(){
    console.log('8080번 포트로 실행'); 
}); 
// 터미널 실행 후 브라우저에서 localhost:8080 으로 접속, 터미널 종료는 ctrl C

/* 로컬호스트와 로컬터미널, 서버와 서버터미널은 다르다. 
서버에서 이 작업 하는 방법 : 서버 폴더에 html 파일 올리고(서버에서의 경로로 리드파일해야됨)
서버에서 8080포트 열고, 서버 터미널에서 이 http.js파일을 실행시킨 뒤
서버주소:8080으로 접속하면 열림. */
