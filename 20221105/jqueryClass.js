function addClass(){
    $("div").addClass("class1");
}

function removeClass(){
    $("div").removeClass("class1");
}
// hasClass는 클래스의 유무를 알려주는 함수. toggleClass는 있으면 없애고 없으면 넣는 함수.

//UI

function second(){
    $("div").switchClass("first", "second", 2000);
}

function sizeup(){
    $("div").switchClass("second", "sizeup", 1000);
}

function third(){
    $("div").switchClass("sizeup", "third",2000);
}

function first(){
    $("div").switchClass("third","first",1000);
}

/* 스위치 클래스는 이미 있는 클래스는 다음 클래스로 바꾸고, 없던 클래스는 생성하는 원리이다. 
해서 클래스가 중첩될 수 있음 */

//실습1

function bal1(){
    $("img").attr("src", "bal1.jpg");
}

function bal2(){
    $("img").attr("src", "bal2.jpg");
}

function bal3(){
    $("img").attr("src", "bal3.jpg");
}

function bal4(){
    $("img").attr("src", "bal4.jpg");
}