const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu-close");

const body = document.querySelector("body");

menu.addEventListener("click", function () {
  body.classList.add("open-nav");
});
closeMenu.addEventListener("click", function () {
  body.classList.remove("open-nav");
});
