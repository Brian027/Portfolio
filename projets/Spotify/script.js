/* Menu hamnurger mobile */

const btnHamburger = document.querySelector(".btnHamburger"),
      navMobile = document.querySelector(".navlinks-content");

btnHamburger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
})