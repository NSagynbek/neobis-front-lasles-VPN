
const navbar = document.querySelector(".navbar_main")
const menuToggler = document.querySelector(".menuToggle")

menuToggler.addEventListener("click",toggler)

function toggler(){
    navbar.classList.toggle("toggle")  
}