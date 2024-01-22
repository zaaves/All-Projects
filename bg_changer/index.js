let firstdiv = document.querySelectorAll(".firstcontainer div");
let body1 = document.querySelector("body")

firstdiv.forEach(function(divv){
    divv.addEventListener('click',function(e){
        if (e.target.id === e.currentTarget.id) {
            console.log(e.target.id)
            body1.style.backgroundColor = e.target.id
        }
    })
})

