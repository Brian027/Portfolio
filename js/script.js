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

const txtAnim = document.querySelector(".dark-bg h2");

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 30,
})

  .changeDelay(70)
  .pauseFor("1000")
  .typeString("developpeur fullstack à la réunion.")
  .pauseFor("2000")
  .deleteChars("35")
  .pauseFor("3000")
  .typeString("Concepteur de sites internet")
  .pauseFor("500")
  .deleteChars("28")
  .typeString("et application web et mobile.")
  .pauseFor("2000")
  .deleteChars("29")
  .pauseFor("3000")
  .typeString('Dev <span style="color:#107aa3;">CSS</span> !')
  .pauseFor("2000")
  .deleteChars("9")
  .pauseFor("2000")
  .typeString('Dev <span style="color: orangered;">JavaScript</span> !')
  .pauseFor("2000")
  .deleteChars("16")
  .pauseFor("2000")
  .typeString('Dev <span style="color: purple;">PHP</span> !')
  .pauseFor("2000")
  .deleteChars("9")
  .pauseFor("2000")
  .typeString("Développeur Mobile")
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

  let nav2 = document.querySelectorAll(".nav-navigation a");
  const btn = document.querySelectorAll(".nav-toggler");

  btn.forEach((item) =>
    item.addEventListener("click", () => {
      TweenMax.staggerFrom(
        nav2,
        0.1,
        {opacity: 0, delay: 0.5, ease:Elastic.easeOut },
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
  //......... Animate Section hero Start .........//

  let heroH1 = document.querySelectorAll(".dark-bg .text-hero");
  let mouseIcon = document.querySelectorAll(".dark-bg a");

  window.addEventListener("load", () => {
    TweenMax.staggerFrom(heroH1, 0.5, {y: -10, opacity: 0, delay: 0.5, ease:Expo.easeout}, 0.5)
  })

  window.addEventListener("load", () => {
    TweenMax.staggerFrom(mouseIcon, 3, { opacity: 0, delay: 5, ease:Back.easeOut}, 0.5)
  })
  //......... Animate Section hero End .........//



//................. JQuery end ..................//

//................. About start animate ..................//

const about = document.querySelectorAll("#about .section-intro, #about .about-content , #about .about-content .skill, #about .about-content ");
const pfo = document.querySelectorAll("#portfolio .section-intro, #portfolio .folio-item");
const srv = document.querySelectorAll("#services .section-intro, #services .services-content");

let options = {
  // root: null
  rootMargin: "-20% 0px",
  threshold: 0,
};

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

about.forEach((text) => {
  observer.observe(text);
});

pfo.forEach((text) => {
  observer.observe(text);
});

srv.forEach((text) => {
  observer.observe(text);
});

//................. About end animate ..................//

//................. PortFolio start animate ..................//



//................. PortFolio end animate ..................//