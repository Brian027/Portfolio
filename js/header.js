//................ Navbar Start ................//

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

    const TL = gsap.timeline({paused: true});
    
    TL.staggerFrom(linkNav, 1, {y: 200, ease:"Expo.out"}, 0.3)

    setTimeout(() => {
      TL.play();
    }, 500);

    

})

//................ Navbar End ................//