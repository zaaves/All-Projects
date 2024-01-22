var score = 0;
var timer = 60;
var hitrn = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#panelbtm").innerHTML = clutter;
}

function getNewhit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            if(score<0){
                document.querySelector("#panelbtm").innerHTML = `<h1>Game Over <br>Your score is ${score = 0}</h1>`;
            }
            document.querySelector("#panelbtm").innerHTML = `<h1>Game Over <br>Your score is ${score}</h1>`;
        }
    }, 1000)
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

//Event bubbling =  jispe click karoge wo Element par event raise hoga, aur event listener na milne par  event Element ke parent par listener dhudega, waha bhi na milne par event parent ke parent ke parent pr listener dhudega

document.querySelector("#panelbtm").addEventListener("click", function (dets) {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewhit();
    }
    else{
        makeBubble();
        score -=10;
        document.querySelector("#scoreval").textContent = score;
        if(score<0){
            document.querySelector("#scoreval").textContent = 0;
        }
    }
})

makeBubble();
runTimer();
getNewhit();