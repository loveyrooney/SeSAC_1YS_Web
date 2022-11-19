function func1(){
    return new Promise(function(resolve, reject){
        var suc = "success!";
        resolve(suc);
    });
}

func1().then(function(result){      //then에 함수로된 인자를 주면 프로미스로 된 함수에서 리턴값을 가져오게할수있음
    console.log("result:", result);
});

function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("success");}, 1000); 
    });
}

func2().then(function(result){
    console.log("result2:", result);
    var a = 1;
    return a;    
}).then(function(abc){   //chaining
    console.log("abc:", abc);
});

/* promise의 문법 : new Promise(fucntion(resolve역할, reject역할){})
  resolve : 함수형태, 성공했을때 실행할 대상
  reject : 함수형태, 실패나 에러일때 실행할 대상 */

function func3(flag){
    return new Promise(function(resolve, reject){
        if(flag){
            resolve("flag is true");
        } else {
            reject("flag is false");
        }
    });
}

func3(true).then(
   function(msg){
    console.log("truemsg :", msg);
}, function(msg){
    console.log("falsemsg :", msg);
});

//위처럼 함수 2개 넣을수도 있고 아래처럼 캐치를 사용해 배치할수도 있음.
func3(false).then(
    function(msg){
        console.log("truemsg :", msg);},
    function(msg){
        console.log("truemsg2", msg);}
).catch(
    function(msg){
        console.log("falsemsg :", msg);}
);
