let counter = 0;
var plus = document.querySelector(".pls");
var minus = document.querySelector(".min")
var reset = document.querySelector(".res");
var display = document.querySelector("h1");

var limit = prompt("Enter the Limit");
limit = parseInt(limit);

if(limit===counter){
    alert('You reached your limit');
}

plus.addEventListener("click",function(){
    counter++;
    display.innerHTML = counter;
    if(limit===counter){
        alert('You reached your limit');
    }
})

minus.addEventListener("click",function(){
    counter--;
    display.innerHTML = counter;
    if(counter<=0){
        counter = 0;
        display.innerHTML = counter;
    }
    if(limit===counter){
        alert('You reached your limit');
    }
})

reset.addEventListener("click",function(){
    counter = 0;
    display.innerHTML = counter;
    if(limit===counter){
        alert('You reached your limit');
    }
})
