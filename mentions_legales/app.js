// Preload
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
}(jQuery);

//................ JQuery start ................//

(function ($) {
  ("use strict");

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
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        300,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Skills
  $(".skill").waypoint(function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  });
})(jQuery);

//................. JQuery end ..................//

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