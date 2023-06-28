//................ Navbar Start ................//

var tlAnimOne = gsap.timeline({paused: true});

/* ********** Animate icon nav hamburger start ************ */
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-navigation");
const linkNav = document.querySelectorAll(".nav-link");

function openNav() {
  hamburgerButton.classList.add("active");
  navigation.classList.add("active");
  tlAnimOne.timeScale(1.5);
  tlAnimOne.play();
}

function closeNav() {
  setTimeout(() => {
    hamburgerButton.classList.remove("active");
    navigation.classList.remove("active");
  }, 2000);
  tlAnimOne.timeScale(3);
  tlAnimOne.reverse();
}

/* ********** Animate icon nav hamburger end ************ */

/* ************** Animate NavLink start **************** */

tlAnimOne.fromTo(linkNav, {
  y: 200,
  skewY: 10,
  duration: 2,
},{
  y: 0,
  skewY: 0,
  delay: 1,
  duration: 2,
  ease: "power2.out",
})

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
    }, 4000);
  });
})
//................ Navbar End ................//