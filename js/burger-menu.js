const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
});
