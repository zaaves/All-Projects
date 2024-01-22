var bug1 = document.querySelector(".burger");
var bb1 = document.querySelectorAll(".bug")[0]
var bb2 = document.querySelectorAll(".bug")[1]
var bb3 = document.querySelectorAll(".bug")[2]
var ul = document.querySelector("nav ul");

bug1.addEventListener('click', function () {
    bb1.classList.toggle("active");
    bb3.classList.toggle("active1");
    bb2.classList.toggle("active3")
    ul.classList.toggle("active4")
})

document.querySelectorAll("nav ul li").forEach(n => n.addEventListener('click', () => {
    ul.classList.remove("active4");
    bb1.classList.remove("active");
    bb2.classList.remove("active3");
    bb3.classList.remove("active1");
}))


