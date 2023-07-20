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
let nameInput = document.querySelectorAll("form input[type='text'");
let emailInput = document.querySelectorAll("form input[type='email'");
let textarea = document.querySelectorAll("form textarea")
let errorMsg = document.querySelector(".error-msg")

form.onsubmit = (e) => {
    e.preventDefault();
    errorMsg.innerHTML = "Something went wrong :(";
}