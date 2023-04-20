//................ Navbar Start ................//

/* ********** Animate nav-link start ************ */

let nav2 = document.querySelectorAll(".nav-navigation .nav-link");
let rsLink = document.querySelectorAll(".nav-navigation .social-links a");

const btn = document.querySelectorAll(".nav-toggler");

btn.forEach((item) =>
  item.addEventListener("click", () => {
    TweenMax.staggerFrom(
      nav2,
      0.1,
      { y: -20, opacity: 0, delay: 0.3, ease: Elastic.ease },
      0.1
    );
  })
);

btn.forEach((item) =>
  item.addEventListener("click", () => {
    TweenMax.staggerFrom(
      rsLink,
      0.3,
      { y: 20, opacity: 0, delay: 0.5, ease: Elastic.ease },
      0.2
    );
  })
);
/* ********** Animate nav-link end ************ */

/* ********** Animate icon nav hamburger start ************ */
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-navigation");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

/* ********** Animate icon nav hamburger end ************ */

//................ Navbar End ................//