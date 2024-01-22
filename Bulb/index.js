var a = document.querySelector(".bulbcont")
// a.style.background = "yellow"

var flag = 0;
var b = document.querySelector(".btn");
b.addEventListener("click",function(){
    if(flag == 0){
        a.style.backgroundColor = "yellow"
        flag = 1;
        b.innerHTML = "ON"
    }
    else{
        a.style.backgroundColor ="transparent";
        flag = 0;
        b.innerHTML = "OFF"
    }
})

