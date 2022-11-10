function drop(e){
    var dropdown = e.currentTarget;
    console.log(dropdown);
} // 제이쿼리 안쓰고 이벤트 객체의 요소를 가져오는 방법 ㅇㅇ 이거는 인자 이름 아무걸로 하면안됨. 

/* 변수를 선언만 하고 다른 영역에서 할당하는 이유를 이 코드를 보면 알수있음.
아래 코드에서 target은 let과 같은 느낌으로 쓰여짐 
const는 선언 및 할당을 그 자리에서 해야됨. 
*/
var target;   
    
$("td").on("click", function( event1 ){ //가져올 이벤트의 인자이름은 아무걸로 해도 됨. 
    //console.log(event1); <이벤트>는 <객체>이다!! 함수가 아님. 여기서는 onclick 이벤트.
    target = event1.currentTarget; //currentTarget은 이벤트가 발생한 element를 가리킴
    $("#date").val($(event1.currentTarget.children[0]).text());
});
function writeSchedule(){
    // console.log(target); 91번 라인에서 타겟변수를 할당했음. 재할당 안했으니까 여기도 계속적용.
    var content = $("#content").val();

    if(target.children.length>1){
        var div = target.children[1];
        div.innerText = content;
    } else {
        var div = document.createElement("div");
        div.style = "font-size:0.4em;"
        div.innerText = content;

        $(target).append(div);
    }
}
        

/* $("td").on("click",function(){
    $("#date").val($(this).text());
});

var td = document.querySelectorAll("td");
function writeSchedule(){
    for(var i=0; i<td.length; i++){
        if(td[i].textContent == $("#date").val()){
            var addTd = $("#content").keydown().val();
            const adddiv = document.createElement("div");
            td[i].appendChild(adddiv);
            adddiv.innerText = `${addTd}`
            //$("td"[i]).children().html("<p>hi</p>"); 
        }
    }
}  textContent는 모든 자식을 병합해서 돌려주기 때문에 이방법 쓸수없음. */ 

$("#input1").keydown(function(e){
    //$("#alert").text("글자가 입력됨," +  e.currentTarget.value);
    console.log("input keydown");
    if(e.keyCode == 13){
        console.log("this is enter");
    }
});

$("#input1").keyup(function(e){
    console.log("input keyup");
});

/*mouse event : mouseover
$("#div1").click(function(){
    console.log("div click");
});*/