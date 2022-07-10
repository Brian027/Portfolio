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

//................ Navbar End ................//

/* ********** Animate nav-link start ************ */

let nav = document.querySelectorAll(".nav-item");
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

/* ********** Animate nav-link end ************ */

/* ********** Animate icon nav hamburger start ************ */

const allBoxes = document.querySelectorAll(".btn-box");

allBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

/* ********** Animate icon nav hamburger end ************ */

/* ******************** Animate navbar start ******************** */

let nav2 = document.querySelectorAll(".nav-item");

window.addEventListener("load", () => {
  TweenMax.staggerFrom(
    nav2,
    0.5,
    { scale: 0.5, opacity: 0, delay: 0.1, ease: Circ.easeInOut },
    0.3
  );
});

/* ********************* Anim navbar end ********************** */

// JS Contact

$(function () {
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "../form/mail.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        cache: false,
        success: function () {
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success");

          $("#success > .alert-success").append(
            "<strong>".text(
              "Merci " +
                name +
                ", nous vous contacterons dans les plus brefs délai. A très vite !"
            )
          );
          $("#success > .alert-success").append("</div>");
          $("#contactForm").trigger("reset");
        },
        error: function () {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger");

          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Désoler " +
                name +
                ", Un petit soucis technique mais rien de grave, tout devrait rentrer dans l'ordre dans les prochaines 24h !"
            )
          );
          $("#success > .alert-danger").append("</div>");
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#success").html("");
});