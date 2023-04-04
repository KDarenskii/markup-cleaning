const header = document.querySelector(".header");
const Menu = document.querySelector(".menu");

window.addEventListener("scroll", function(){
    if (window.scrollY > 0) {
        header.classList.add("scroll");
        Menu.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
        Menu.classList.remove("scroll");
    }
})


// Scroll to elements
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", (event) => {
        event.preventDefault();
        const menuLinkData = event.currentTarget.dataset.section;
        const block = document.querySelector(`#${menuLinkData}`);

        scrollToElement(block);

        if (Menu.classList.contains("active")){
            document.querySelector("body").classList.remove("lock");
            Menu.classList.remove("active");
            document.querySelector(".burger").classList.remove("active");
        }
    });
});

function scrollToElement(element){
    window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
        left: 0,
    })
}
