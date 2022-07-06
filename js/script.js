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
jQuery;
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

//................ JQuery start ................//

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

/* Consent cookies */

/* Counter up */

$(document).ready(function(){
    $(".counter").counterUp({
        delay: 5,
        time: 2000,
    });
});

/* ********************** */

const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

/*---- Local Storage ----*/
// Expire si on supprime l'historique/cache
// 10mb max

localStorage.setItem('casquette', '20');
localStorage.removeItem('casquette');

/*---- Session storage ----*/
// Se supprime à la fin d'une session
// 5mb max

sessionStorage.setItem('watchtime', '500');
sessionStorage.removeItem('watchtime');

/*---- Les cookies ----*/
// Expirer quand on le souhaite, de base à la fin de la session.
// 4kb max

// document.cookie = `voiture=audi; expires=${new Date(2022, 07, 05).toUTCString()}`
// document.cookie = `voiture=; expires=${new Date(0).toUTCString()}`

