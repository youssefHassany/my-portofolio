let nav = document.querySelector("nav");
let burgerIcon = document.querySelector(".burger-icon");

const handleMenu = () => {
    nav.classList.toggle("show-nav")
    burgerIcon.classList.toggle("move-burger");
}

burgerIcon.addEventListener("click", handleMenu);

nav.addEventListener('click', () => {
    nav.classList.remove('show-nav') // to close nav menu on click
})

let year = document.querySelector("span");
let date = new Date()
year.innerHTML = date.getFullYear()

let form = document.querySelector("form");
let errorMsg = document.querySelector(".error-msg")

form.onsubmit = () => {
    errorMsg.innerHTML = "Something went wrong :("
}