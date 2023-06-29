//.........................Back to Top Start.......................//

const backToTop = document.getElementById("btn-back-to-top");
const backTopBtn = document.getElementById("go-top");

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});

//.........................Back to Top End........................//
//..............Scrolling Smooth Effect..............//
//........Home Section Start animate.........//

gsap.registerPlugin(ScrollTrigger);
const homeText = document.querySelector(".home-page .textAnim");
const textSlide = document.querySelector(".home-page .animateText #hero-p");
const words = ["Développeur Web à La Réunion", "Développeur Mobile", "Développeur React Js", "Développeur Front End", "Développeur JavaScript"];

let masterTL = gsap.timeline({ repeat: -1 }).pause();
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(textSlide, {
    opacity: 1,
    duration: 1,
    text: word,
  });
  masterTL.add(tl);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    masterTL.play();
  } , 2500);
});
function addScrollSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg") // fast
  clamp = gsap.utils.clamp(-20, 20); // Don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // Only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

//........Portfolio Section Start animate.........//

const textPfo = document.querySelectorAll(
  ".portfolio .intro-info span h5, .portfolio .intro-info span h1, .portfolio .intro-info span .lead"
);
const containerGrid = document.querySelector(".grid-container").children;

gsap.from(textPfo, {
  scrollTrigger: {
    trigger: textPfo,
    start: "top bottom",
    end: "bottom top",
    toggleActions: "restart pause reverse none",
  },
  y: 400,
  skewY: 20,
  duration: 4,
  opacity: 0,
  stagger: 0.4,
  ease: "power4.out",
});

gsap.from(containerGrid, {
  scrollTrigger: {
    trigger: textPfo,
    start: "top center",
    end: "bottom top",
    toggleActions: "restart pause reverse none",
  },
  opacity: 0,
  scale: 0.9,
  duration: 4,
  stagger: 0.2,
  ease: "elastic.out(1, 0.3)",
});

// Animer la carte au survol de la souris

// Récupération des éléments

contentWrapper = jQuery(".grid-item");
overlay = jQuery(".grid-item .overlay");
card = jQuery(".grid-item .card-info");
titleCard = jQuery(".grid-item .animated-text span, .grid-item .animated-text i");
hr = jQuery(".grid-item hr");
allText = jQuery(".grid-item .categorie span, .desc span");
btn = jQuery(".grid-item .btn");

// Création de la fonction d'animation

contentWrapper.each(function () {

  const thisWrapper = $(this);
  const thisOverlay = $(this).find(".overlay");
  const thisCard = $(this).find(".card-info");
  const thisTitleCard = $(this).find(".animated-text span, .animated-text i");
  const thisHr = $(this).find("hr");
  const thisAllText = $(this).find(".categorie span, .desc span");
  const thisBtn = $(this).find(".btn");

  // Création de la timeline

  const cardTL = gsap.timeline({ paused: true });

  cardTL.to(thisOverlay, { opacity: 1, duration: 0.2 }, 0.1)
    .to(thisCard, { bottom: 400, duration: 0.2 }, 0.5)
    .from(thisTitleCard, { opacity: 0, duration: 0.2, stagger: 0.1 }, 0.7)
    .from(thisHr, { width: 0, duration: 0.2 }, 0.9)
    .from(thisAllText, { opacity: 0, duration: 0.2, stagger: 0.1 }, 1.1)
    .from(thisBtn, { opacity: 0, duration: 0.2 }, 1.3);

  // Evenement au survol de la souris

  thisWrapper.on("mouseover", function () {
    cardTL.play();
  }).on("mouseout", function () {
    cardTL.reverse();
  });

})

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

//.................. Dark mode end ............................//

//..................  Clap button .......................//

// Récupération des éléments dans le DOM

const clapBtn = document.querySelector(".clap-btn"),
  clapIcon = document.querySelector(".clap-btn svg"),
  clapCount = document.querySelector(".clap-btn span");

// Création de la fonction d'animation

function clapAnimation() {

  const TL = gsap.timeline({ paused: true });

  TL.to(clapIcon, { scale: 1.5, duration: 0.1 })
    .to(clapIcon, { scale: 1, duration: 0.1 })
    .to(clapIcon, { scale: 1.5, duration: 0.1 })
    .to(clapIcon, { scale: 1, duration: 0.1 });

  TL.play();
}

// Evenement au chargement de la page

window.addEventListener("load", () => {
  getClap();
});

// Evenement au clic

clapBtn.addEventListener("click", () => {
  clapAnimation();
  sendClap();
});

// Fonction ajax pour envoyer une requête au fichier PHP

function sendClap() {
  $.ajax({
    url: "./data/count/count-clap.php",
    type: "POST",
    success: function (data) {
      console.log(data);
      clapCount.innerText = data;
    }
  })
}

// Fonction ajax pour récupérer le nombre de claps

function getClap() {
  $.ajax({
    url: "./data/count-clap",
    type: "POST",
    success: function (data) {
      clapCount.innerText = data;
    }
  })
}