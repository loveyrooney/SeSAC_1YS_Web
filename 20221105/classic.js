const modalback = document.querySelector("#modalback");
const modalbody = document.querySelector("#modalbody");
const closebtn = document.querySelector("#close");

function submit(){
    modalback.classList.remove("hidden");
    modalbody.classList.remove("hidden");
    var checkedRadio = $("input[name=flexRadioDefault]:checked");
    if(checkedRadio.val() == "on"){
        $("#submitUl").append(`<li style="list-style:none;">${$(`label[for=${$(checkedRadio)[0].id}]`).text()}</li>`);
    }   
    var checkedAge = $("input[type=checkbox]:checked");
    if(checkedAge[0].checked == true){
        $("#submitUl").append(`<li style="list-style:none;">${$(`label[for=${$(checkedAge)[0].id}]`).text()}</li>`);
    }
    var composer = $("#composer");
    var work = $("#work");
    if(composer[0].value !== ''){
        $("#submitUl").append(`<li style="list-style:none;">${composer[0].value}</li>`);
    } 
    if(work[0].value !== ''){
        $("#submitUl").append(`<li style="list-style:none;">${work[0].value}</li>`);
    } else {
        $("#submitUl").append(`<li style="list-style:none;">Please write on your tastes</li>`);
    }
}

function close(){
    modalback.classList.add("hidden");
    modalbody.classList.add("hidden");
}
closebtn.addEventListener("click", close);

