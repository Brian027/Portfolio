//................ Navbar Start ................//

var tl = gsap.timeline({paused: true});

/* Logo Anim start */

const logoSvg = document.querySelector(".logo");

tl.from(logoSvg, 1, {scale: 0.5, opacity: 0, delay: .5, duration: 2.5, ease:"elastic.out(1, 0.3)"}, 0.9)

tl.play();

/* ********** Animate icon nav hamburger start ************ */
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-navigation");
const linkNav = document.querySelectorAll(".nav-link");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

/* ********** Animate icon nav hamburger end ************ */

/* ************** Animate NavLink start **************** */

hamburgerButton.addEventListener("click", () => {
    
    tl.staggerFrom(linkNav, 1, {y: 200, ease:"Expo.out"}, 0.3)

    setTimeout(() => {
      tl.play();
    }, 500);

})

//................ Navbar End ................//