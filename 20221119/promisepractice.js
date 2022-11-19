let array = ['abata', 'lalaland', 'harryPotter', 'HomeAlone','IronMan'];
function signIn(id,pw){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("user come");
            resolve(id);
        }, 3000);
    });   
}
function getVideo(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(id + "'s video list");
            resolve(array);
        }, 2000);
    });   
}
function getDetail(array){
    return new Promise(function(resolve, reject){
        const randomarray = array[Math.ceil(Math.random()*array.length)];
        setTimeout(function(){
            var videoTitle = `video name:${randomarray}`
            resolve(videoTitle);
        }, 1000);
    });
}

/*
signIn('park', '1234')
    .then(function(result){ 
        return getVideo(result);})   //리턴을 하는 이유 : 겟비디오도 프로미스함수이기 때문에 
    .then(function(result2){         //다음 then이 겟비디오의 실행완료를 기다리게 하기 위해서.
        return getDetail(result2[0]);})
    .then(function(videoTitle){
        console.log(videoTitle);
    });
*/
/*
signIn('kim', '1234')                //위방식을 이방식으로 똑같이 써도 됨
    .then(getVideo).then(getDetail)  //이거 어레이 인덱스 어케할건지 다시 공부
    .then(function(videoTitle){
        console.log(videoTitle);
    });
*/

let array2 = {kim:'abata', park:'lalaland', lee:'harrypotter', cho:'Iron man'
              , oh:'Home alone', jeong:'hunt'};
var video;
let key;

function member(enter,cb){
    setTimeout(()=>{
        console.log(enter + " success");
        key = Object.keys(array2)[Math.ceil(Math.random()*Object.keys(array2).length)];
        if(key == "kim"){
            video = array2["kim"];
            cb();
        } else if(key == "park"){
            video = array2["park"];
            cb();
        } else if(key == "lee"){
            video = array2["lee"];
            cb();
        } else if(key == "cho"){
            video = array2["cho"];
            cb();
        } else if(key == "oh"){
            video = array2["oh"];
            cb();
        } else if(key == "jeong"){
            video = array2["jeong"];
            cb();
        } else {
            console.log("you are not member");
        }
    }, 1000); 
}

function videotitle(){
    setTimeout(()=>{
        console.log(key +"'s video :"+video);
    }, 2000);
}

//member("enter",videotitle);

//primise 로 쓰면 

function member(enter){
    return new Promise (function(resolve, reject){
        setTimeout(()=>{
            console.log(enter + " success");
            key = Object.keys(array2)[Math.ceil(Math.random()*Object.keys(array2).length)];
            if(key == "kim"){
                video = array2["kim"];
                resolve();
            } else if(key == "park"){
                video = array2["park"];
                resolve();
            } else if(key == "lee"){
                video = array2["lee"];
                resolve();
            } else if(key == "cho"){
                video = array2["cho"];
                resolve();
            } else if(key == "oh"){
                video = array2["oh"];
                resolve();
            } else if(key == "jeong"){
                video = array2["jeong"];
                resolve();
            } else {
                console.log("you are not member");
            }
        }, 1000); 
    });
}

function videotitle(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(key +"'s video :"+video);
        }, 2000);
    });
   
}

member("enter")
    .then(videotitle);