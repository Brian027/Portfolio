// Preload
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

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

// Type writer section hero

const txtAnim = document.querySelector(".text-hero");

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 30,
})

  .changeDelay(100)
  .pauseFor("2000")
  .typeString("Je suis Brian")
  .pauseFor("2000")
  .deleteChars("13")
  .pauseFor("2000")
  .typeString("<strong>Développeur FullStack</strong>")
  .pauseFor("1000")
  .deleteChars("21")
  .typeString("à La Réunion")
  .pauseFor("2000")
  .deleteChars("12")
  .typeString("Concepteur de sites internet")
  .pauseFor("500")
  .deleteChars("28")
  .typeString("et application web et mobile")
  .pauseFor("2000")
  .start();

function newFunction() {
  return 10;
}

//................ Navbar Start ................//

(function ($) {
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
  $(".navbar a").on("click", function (event) {
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
})(jQuery);
  /* ********** Animate nav-link start ************ */

  let nav = document.querySelectorAll(".nav-item");
  let nav2 = document.querySelectorAll(".navbar .navbar-nav .nav-item, .social-links a");
  const btn = document.querySelectorAll(".btn-box");

  btn.forEach((item) =>
    item.addEventListener("click", () => {
      TweenMax.staggerFrom(
        nav,
        2,
        { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut },
        0.2
      );
    })
  );

  window.addEventListener('load', () => {
    TweenMax.staggerFrom(
      nav2,
      2,
      { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut },
      0.2
    );
  })
  /* ********** Animate nav-link end ************ */

  /* ********** Animate icon nav hamburger start ************ */

  const allBoxes = document.querySelectorAll(".btn-box");

  allBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
    });
  });

  /* ********** Animate icon nav hamburger end ************ */

  //................ Navbar End ................//
  //......... Animate Section hero Start .........//

  let hero = document.querySelectorAll('.dark-bg');

  window.addEventListener('load', () => {
    TweenMax.staggerFrom(
      hero,
      5,
      { scale: 1.05, opacity: 1, delay: 0.5, ease: Sine.ease},
      5
    );
  })

  //......... Animate Section hero End .........//



//................. JQuery end ..................//