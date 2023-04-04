const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");


window.addEventListener("click", (event) => {
    if (menu.classList.contains("active") && !event.target.closest(".header")){
        body.classList.remove("lock");
        menu.classList.remove("active");
        burger.classList.remove("active");
    }
})

burger.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    body.classList.toggle("lock");
    menu.classList.toggle("active");
})
