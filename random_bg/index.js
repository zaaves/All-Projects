const start = document.getElementById("start")
const stop = document.getElementById("stop")

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0;i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalID;
const startColor = function(){
    if(!intervalID){
        intervalID = setInterval(bgcolor,1000)
    }
    function bgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopColor = function(){
    clearInterval(intervalID)
    intervalID = null;
}
start.addEventListener('click',startColor)
stop.addEventListener('click',stopColor)