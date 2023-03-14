const navIcon = document.querySelector(".nav-icon");
const headerMenu = document.querySelector(".header-nav");

navIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("showMenu");
});
