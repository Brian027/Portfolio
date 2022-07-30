/* ***************** Preload Start**********************/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

/* ***************** Preload End**********************/

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