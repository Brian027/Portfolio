/* ***************** Preload Start**********************/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

/* ***************** Preload End**********************/

/* ***************** Back to Top Start**********************/

//Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ***************** Back to Top End**********************/

//................ Navbar Start ................//

//.............. JQuery start ..............//

(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Skills
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );
})(jQuery);

//................ Navbar Start ................//

/* ********** Animate nav-link start ************ */

  let nav2 = document.querySelectorAll(".nav-navigation a");
  const btn = document.querySelectorAll(".nav-toggler");

  btn.forEach((item) =>
    item.addEventListener("click", () => {
      TweenMax.staggerFrom(
        nav2,
        2,
        { scale: 0.8, opacity: 0, delay: 0.5, ease:Elastic.easeOut },
        0.2
      );
    })
  );
  /* ********** Animate nav-link end ************ */

  /* ********** Animate icon nav hamburger start ************ */

  const hamburgerButton = document.querySelector(".nav-toggler");
  const navigation = document.querySelector(".nav-navigation");

  hamburgerButton.addEventListener("click", toggleNav);

  function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
  }

  /* ********** Animate icon nav hamburger end ************ */

  //................ Navbar End ................//

/* **************** Anim section skill start ***************** */

let titleSkill = document.querySelectorAll(".cts, .skl");
let progressBar = document.querySelectorAll(".progress-bar");
let backSkill = document.querySelectorAll(".back-skill");

// window.addEventListener("focus", () => {
//   TweenMax.staggerFrom(
//     titleSkill,
//     1,
//     { opacity: 0, delay: 0.3, ease: Circ.easeIn },
//     0.2
//   );
// });

// window.addEventListener("focus", () => {
//   TweenMax.staggerFrom(
//     progressBar,
//     5,
//     { x: -500, opacity: 1, delay: 0.5, ease: Bounce.easeOut },
//     0.2
//   );
// });

// window.addEventListener("focus", () => {
//   TweenMax.staggerFrom(
//     backSkill,
//     1,
//     { x: -500, opacity: 0, delay: 0.5, ease: Bounce.easeOut },
//     0.2
//   );
// });

// progress.forEach((item) => {
//   item.addEventListener("unload", () => {
//     TweenMax.staggerFrom(progressBar, 3, {x: -500, opacity: 1, delay: 0.5, ease:Bounce.easeOut}, 0.2)
//   })
// })

/* **************** Anim section skill end ***************** */