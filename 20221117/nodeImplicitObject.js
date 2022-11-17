console.log(global.console);
/* global 객체 : 전역객체, 노드에 내장되어있음. console은 global 내에 구성된 객체임 
즉 console.log란 global.console.log(); 글로벌 객체 내의 콘솔 객체의 로그라는 함수기능을 쓰겠음*/

let obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};

console.log(obj);
console.log(obj['out']);
console.time("시간");
console.error("error");
console.timeEnd("시간");
console.table([{name:'abc', oh:'123'},{name:'def', oh:'456'}]);
console.dir(obj, {colors: true, depth: 1});
console.dir(obj, {colors: true, depth: 2});
console.trace("Error");

console.log (__filename); //현재 파일 경로
console.log(__dirname); //현재 파일이 위치한 폴더 경로

// process 객체
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.cpuUsage());

//OS 객체 : 글로벌 객체 아님, 내장모듈. 가져와서 써야됨
const os = require("os");
console.log(os.type());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.freemem());

//path 모듈 
const path = require("path");
const file = __filename;
console.log(path.extname(file));
console.log(path.parse(file)); //파일에서 가져올수 있는 모든 요소를 다 가져온거