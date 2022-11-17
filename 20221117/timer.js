const func1 = setTimeout(function(){
    console.log("1.5초 후 실행");
}, 1500);

/* 함수 따로 정의한 뒤 setTimeout(함수이름, 1500); 해도 됨
재사용을 할 일이 없는 일회성 함수의 경우는 따로 정의하면 코드가 길어지니까 위와같이 쓰기. */

const func2 = setInterval(()=>{
    console.log("1초마다 반복");
}, 1000);

const func3 = setTimeout(()=>{
    console.log("func3 실행");
}, 3000);

setTimeout(()=>{
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4 = setImmediate(()=>{
    console.log("func4 즉시 실행");
});

const func5 = setImmediate(()=>{
    console.log("func5 즉시 실행");
});
clearImmediate(func5);