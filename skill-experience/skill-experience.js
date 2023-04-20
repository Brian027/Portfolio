/* ***************** Preload Start**********************/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

/* ***************** Preload End**********************/

/* ***************** Back to Top Start**********************/
$('.smoothscroll').on('click', function (e) {
  e.preventDefault();

var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
});

var pxShow = 300;
var fadeInTime = 400;
var fadeOutTime = 400;
var scrollSpeed = 300;

jQuery(window).scroll(function() {
  if (!($("#header-search").hasClass('is-visible'))) {
    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery("#go-top").fadeIn(fadeInTime);
    } else {
      jQuery("#go-top").fadeOut(fadeOutTime);
    }
  }
})

/* ***************** Back to Top End**********************/

//................ Navbar Start ................//

//................ Navbar Start ................//

/* ********** Animate nav-link start ************ */

let nav2 = document.querySelectorAll(".nav-navigation .nav-link, .nav-navigation .social-links a");
const btn = document.querySelectorAll(".nav-toggler");

btn.forEach((item) =>
  item.addEventListener("click", () => {
    TweenMax.staggerFrom(
      nav2,
      0.1,
      { y: -20, opacity: 0, delay: 0.3, ease:Elastic.ease },
      0.1
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

/* **************** Anim section skill end ***************** */

//................. Dark mode start ............................//
const body = document.querySelector("body"),
  btnToggle = document.querySelector(".dark-mode");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
}

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});