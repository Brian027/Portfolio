/* ***************** Preload Start**********************/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

/* ***************** Back to Top Start**********************/
$(".smoothscroll").on("click", function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing",
      function () {
        window.location.hash = "";
      }
    );
});

var pxShow = 300;
var fadeInTime = 400;
var fadeOutTime = 400;
var scrollSpeed = 300;

jQuery(window).scroll(function () {
  if (!$("#header-search").hasClass("is-visible")) {
    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery("#go-top").fadeIn(fadeInTime);
    } else {
      jQuery("#go-top").fadeOut(fadeOutTime);
    }
  }
});

/* ***************** Back to Top End**********************/

/* ********** Animate section about start ************ */

let titleAbout = document.querySelectorAll(
  ".title-about, .abt-1, .line-abt, .rs-title"
);
let socialLink = document.querySelectorAll(".about .social-links a");
let imgAbout = document.querySelectorAll(".about .img-about");

window.addEventListener("load", () => {
  TweenMax.staggerFrom(
    titleAbout,
    1,
    { opacity: 0, delay: 0.1, ease: Back.easeIn },
    0.2
  );
});

window.addEventListener("load", () => {
  TweenMax.staggerFrom(
    socialLink,
    1,
    { opacity: 0, delay: 0.2, ease: Back.easeIn },
    0.2
  );
});

window.addEventListener("load", () => {
  TweenMax.staggerFrom(
    imgAbout,
    1,
    { opacity: 0, delay: 0.4, ease: Back.easeIn },
    0.2
  );
});

/* **************** Animate section contact start***************** */
const anim = document.querySelectorAll(
  "#contact .section-intro, #contact .contact-form"
);

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

anim.forEach((text) => {
  observer.observe(text);
});
/* **************** Anim section contact end ***************** */

(function ($) {
  "use strict";

  /*---------------------------------------------------- */
  /* Preloader
	------------------------------------------------------ */
  $(window).load(function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
  });

  /*---------------------------------------------------- */
  /* FitText Settings
  	------------------------------------------------------ */
  setTimeout(function () {
    $("#intro h1").fitText(1, { minFontSize: "42px", maxFontSize: "84px" });
  }, 100);

  /*---------------------------------------------------- */
  /* FitVids
	------------------------------------------------------ */
  $(".fluid-video-wrapper").fitVids();

  /*---------------------------------------------------- */
  /* Owl Carousel
	------------------------------------------------------ */
  $("#owl-slider").owlCarousel({
    navigation: false,
    pagination: true,
    itemsCustom: [
      [0, 1],
      [700, 2],
      [960, 3],
    ],
    navigationText: false,
  });

  /*----------------------------------------------------- */
  /* Alert Boxes
  	------------------------------------------------------- */
  $(".alert-box").on("click", ".close", function () {
    $(this).parent().fadeOut(500);
  });

  /*----------------------------------------------------- */
  /* Stat Counter
  	------------------------------------------------------- */
  var statSection = $("#stats"),
    stats = $(".stat-count");

  statSection.waypoint({
    handler: function (direction) {
      if (direction === "down") {
        stats.each(function () {
          var $this = $(this);

          $({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 4000,
              easing: "swing",
              step: function (curValue) {
                $this.text(Math.ceil(curValue));
              },
            }
          );
        });
      }

      // trigger once only
      this.destroy();
    },

    offset: "90%",
  });

  /*---------------------------------------------------- */
  /*	Masonry
	------------------------------------------------------ */
  var containerProjects = $("#folio-wrapper");

  containerProjects.imagesLoaded(function () {
    containerProjects.masonry({
      itemSelector: ".folio-item",
      resize: true,
    });
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
	------------------------------------------------------*/
  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 300,
    showCloseBtn: false,
    mainClass: "mfp-fade",
  });

  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*---------------------------------------------------- */
  /*  Placeholder Plugin Settings
	------------------------------------------------------ */
  $("input, textarea, select").placeholder();

  /*---------------------------------------------------- */
  /*	contact form
	------------------------------------------------------ */

  /* local validation */
  $("#contactForm").validate({
    /* submit via ajax */
    submitHandler: function (form) {
      var sLoader = $("#submit-loader");

      $.ajax({
        type: "POST",
        url: "../form/mail.php",
        data: $(form).serialize(),
        beforeSend: function () {
          sLoader.fadeIn();
        },
        success: function (msg) {
          // Message was sent
          if (msg == "OK") {
            sLoader.fadeOut();
            $("#message-warning").hide();
            $("#contactForm").fadeOut();
            $("#message-success").fadeIn();
          }
          // There was an error
          else {
            sLoader.fadeOut();
            $("#message-warning").html(msg);
            $("#message-warning").fadeIn();
          }
        },
        error: function () {
          sLoader.fadeOut();
          $("#message-warning").html("Le message n'a pu être envoyer");
          $("#message-warning").fadeIn();
        },
      });
    },
  });
})(jQuery);

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
