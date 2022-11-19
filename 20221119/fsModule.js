//fs모듈도 내장모듈이고, 파일 처리 시스템이 비동기방식이므로 콜백함수의 구조를 띰.
const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if(err) throw err; //에러를 던진다고 표현. 콘솔로그 에러랑 다른점은 에러 자체를 리턴하는느낌.
    console.log("data:",String(data)); //data.toString() 과 같음
});

const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data)=>{
        console.log("primise data :", data.toString());
    });

//파일 만들기
fs2.writeFile("./write.txt","sesac" )
    .then(()=>{
        return fs2.readFile("./write.txt");
    })
    .then((data)=>{
        console.log(data.toString());
    })

    
fs.writeFile("./write2.txt","hello", function(err){
    if(err) throw err;
    console.log("writeFile success!");
    fs.readFile("./write2.txt", function(err, data){
        if(err) throw err;
        console.log("write2 data:", data.toString());
    })
});  