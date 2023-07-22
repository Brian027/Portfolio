//................ Navbar Start ................//

var tlAnimOne = gsap.timeline({paused: true});

/* ********** Animate icon nav hamburger start ************ */
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-navigation");
const linkNav = document.querySelectorAll(".nav-link");
const hamburgerLinesOne = document.querySelector(".nav-toggler .line.l1");
const hamburgerLinesTwo = document.querySelector(".nav-toggler .line.l2");
const textBtn = document.querySelector(".nav-toggler .textBtn");

function openNav() {
  hamburgerButton.classList.add("active");
  navigation.classList.add("active");
  tlAnimOne.timeScale(1.5);
  tlAnimOne.play();
  gsap.to(textBtn, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
  gsap.to(hamburgerLinesOne, {
    rotate: 45,
    y: 0.5,
    width: 50,
    duration: 0.5,
    ease: "power2.out",
  },)
  gsap.to(hamburgerLinesTwo, {
    rotate: -45,
    y: -0.5,
    width: 50,
    duration: 0.5,
    ease: "power2.out",
  })
}

function closeNav() {
  setTimeout(() => {
    hamburgerButton.classList.remove("active");
    navigation.classList.remove("active");
  }, 2000);
  tlAnimOne.timeScale(3);
  tlAnimOne.reverse();
  gsap.to(textBtn, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  })
  gsap.to(hamburgerLinesOne, {
    rotate: 0,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  })
  gsap.to(hamburgerLinesTwo, {
    rotate: 0,
    y: 5,
    width: 40,
    duration: 0.5,
    ease: "power2.out",
  })
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