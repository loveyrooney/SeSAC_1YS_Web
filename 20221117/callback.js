/* function func1(value, call){
    console.log(value);
    call();
}
func1('a', function(){
    console.log("1");
}); //익명함수로 지정해도 되고

function func2(){
    console.log("2");
}
func1(func2); //별도로 함수선언 후 불러와도 된다
*/

console.log("start");

function login(id, callback1){        //2.로그인함수는 이런내용임,
    setTimeout(()=>{                   
        console.log('login success'); //3.일단 2초뒤에 로그인석세스를 먼저 띄우고
        callback1(id);                //4.아이디를 가져온 다음에
    }, 2000);
}
login('lee', function(id){  
    console.log(id + ", wellcome!"); // 1.이거를 실행하려고 하는데 5.id를 받아서 이거를 실행하는거임
});

console.log("finish");



/* 콜백함수는 강제적으로 처리 순서를 지정하기 위해 비동기 프로그래밍에서 사용하는함수. 
매개변수에 넣어지는 콜백함수가 반복되어 콜백지옥 발생 */

//콜백 지옥 만들기
let array = ['abata', 'lalaland'];
function signIn(id,pw,cb){
    setTimeout(function(){
        console.log("user come");
        cb(id);
    }, 3000);
}
function getVideo(id, cb){
    setTimeout(function(){
        console.log(id + "'s video list");
        cb(array);
    }, 2000);
}
function getDetail(video, cb){
    setTimeout(function(){
        cb("Video name : "+ video);
    }, 1000);
}

signIn('park', '1234', function(id){
    getVideo(id, function(array){
        getDetail(array[0], function(videoTitle){
            console.log(videoTitle);
        });
    });
});

/*
callback1 = function(user){
    getVideo(user, );
}
// 45 cb
cb = function(videolist){
    getDetail(videolist[0]);
}
// 50 cb
cb =  function(videoTitle){
    console.log(videoTitle);
} */

/* let user = signIn('park', '1234');
   let videolist = getVideo(user);
   let videoTitle = getDetail(videolist[0]);
   console.log(videoTitle);
동기 프로그래밍으로 실행하면 이렇게 쓰면 되는작업 */