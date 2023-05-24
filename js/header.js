//................ Navbar Start ................//

var tlAnimOne = gsap.timeline({paused: true});

/* Logo Anim start */

// const logoSvg = document.querySelector(".logo");

// tl.from(logoSvg, 1, {scale: 0.5, opacity: 0, delay: .5, duration: 2.5, ease:"elastic.out(1, 0.3)"}, 0.9)

// tl.play();

/* ********** Animate icon nav hamburger start ************ */
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-navigation");
const linkNav = document.querySelectorAll(".nav-link");

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");tlAnimOne.play();
}

/* ********** Animate icon nav hamburger end ************ */

/* ************** Animate NavLink start **************** */

tlAnimOne.staggerFrom(linkNav, 1, {y: 200, delay: 0.5, duration: 2.5, ease: "expo.out"}, .5)

hamburgerButton.addEventListener("click", () => {
  toggleNav();
  tlAnimOne.play();
});
//................ Navbar End ................//