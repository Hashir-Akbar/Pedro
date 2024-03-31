import "./style.css"

const mobileMenu = document.querySelector(".mobile-menu > img")
const mobileNav = document.querySelector(".mobile-nav")

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden")
})