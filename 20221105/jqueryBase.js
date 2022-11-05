function parent(){
    $("#li1").parent().append("<li>parent append</li>");
    // parent().parent() 하면 엄마의 엄마. 이어 붙일수 있음.
    // parents() 조상, next/prev() 다음/이전 형제, children() 자식 모두
}
function removeElement(){
    $("li").remove();
} // 얘는 본인을 지우는거. 여기선 li를 선택했으니 모든 li태그 지워짐 
//empty()는 자식을 싹다 지우는거. 

function append(){
    $("#ul").append("<li>append</li>");
} //맨아래, 기준인 리스트와 상관없음 리스트의 가장 맨 아래에 하나 더 추가

function prepend(){
    $("#ul").prepend("<li>prepend</li>");
} //맨위

function before(){
    $("#li1").before("<li>before</li>");
} //형제를 추가하는거임, 기준이 사라지면 동작안함

function after(){
    $("#li1").after("<li>after</li>");
}


function appendElement(){
    document.querySelector("#p1").append(" + <h3>this is JS</h3> 얘는 태그인식 못함");
    $("#p1").append("<h3>hello, world!</h3>");
}

function changeText(){
    $("#p1").text("changed text!");
}

function changeHTML(){
    $("#p1").html("<strong>bold text!</strong>");
}

function setStyle1(){
    var p = document.querySelector("#p1");
    p.style = "background-color:yellow;"
}

function setStyle2(){
    $("#p1").css("background-color","aqua");
}

function setStyle3(){
    $("#p1").attr("style", "background-color: yellowgreen;")
    //.attr("img src", "url주소") 등 요소를 바꾸는 함수임. 
}

function getData(){
    var value1 = document.getElementById("input1").value;
    console.log(`JS : ${value1}`);

    var value2 = $("#input1").val();
    console.log(`Jquery: ${value2}`);
}

function setData(){
    document.getElementById("input1").value = "hi"; //JS
    $("#input1").val("hello"); //Jquery
}