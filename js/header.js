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

function openNav() {
  hamburgerButton.classList.add("active");
  navigation.classList.add("active");
  tlAnimOne.timeScale(1);
  tlAnimOne.play();
}

function closeNav() {
  setTimeout(() => {
    hamburgerButton.classList.remove("active");
    navigation.classList.remove("active");
  }, 2000);
  tlAnimOne.timeScale(2);
  tlAnimOne.reverse();
}

/* ********** Animate icon nav hamburger end ************ */

/* ************** Animate NavLink start **************** */

tlAnimOne.staggerFrom(linkNav, 1, {y: 200, delay: 0.5, duration: 2.5, ease: "expo.out"}, .5)

hamburgerButton.addEventListener("click", () => {
  if(hamburgerButton.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});

linkNav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    closeNav();
    setTimeout(() => {
      window.location.href = link.href;
    }, 3000);
  });
})
//................ Navbar End ................//