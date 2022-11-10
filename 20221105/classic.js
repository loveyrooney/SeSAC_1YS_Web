function modal(){
    $(".hidden").removeClass(".hidden");
} // 부트스트랩 모달창은 토글적용되어있음. 이거 내가 만든 서브밋 버튼기능이랑 충돌하는거 해결해야됨.

function submit(){
    var checkedRadio = $("input[name=flexRadioDefault]:checked");
    if(checkedRadio.val() == "on"){
        $("#submitUl").append(`<li>${$(`label[for=${$(checkedRadio)[0].id}]`).text()}</li>`);
    }   
    var checkedAge = $("input[type=checkbox]:checked");
    if(checkedAge[0].checked == true){
        $("#submitUl").append(`<li>${$(`label[for=${$(checkedAge)[0].id}]`).text()}</li>`);
    }
    var composer = $("#composer");
    var work = $("#work");
    if(composer[0].value !== ''){
        $("#submitUl").append(`<li>${composer[0].value}</li>`);
    } 
    if(work[0].value !== ''){
        $("#submitUl").append(`<li>${work[0].value}</li>`);
    }
    modal();
}

function close(){
    $(".hidden").addClass(".hidden");
}