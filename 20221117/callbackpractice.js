function call(name, cb) {
    console.log("사용자는 " + name);
    setTimeout(()=>{
        console.log( "시작은 call" );
        cb();
    }, 2000);
}
function back(cb) {
    setTimeout(()=>{
        console.log( "두번째는 back");
        cb();
    }, 1000);
}
function hell() {
    setTimeout(()=>{
        console.log( "세번째는 hell");
    }, 1500);
}

call('kim', function(){
    back(function(){
        hell();
    });
});
