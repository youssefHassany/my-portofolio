let nav = document.querySelector("nav");
let burgerIcon = document.querySelector(".burger-icon");

const handleMenu = () => {
    nav.classList.toggle("show-nav")
    burgerIcon.classList.toggle("move-burger");
}

burgerIcon.addEventListener("click", handleMenu);