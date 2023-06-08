/* ***************** Back to Top Start**********************/

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

/* ***************** Back to Top End**********************/

//........Home Section Start animate.........//

const homeSpan = document.querySelector(".home-page .animate-text").children,
  txtsLen = homeSpan.length;

let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    homeSpan[i].classList.remove("text-in", "text-out");
  }

  homeSpan[index].classList.add("text-in");

  setTimeout(function () {
    homeSpan[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}
window.onload = setTimeout(() => {
  animateText();
}, 2000);

const scrollToPfo = document.querySelector(".scrollToPortfolio");

scrollToPfo.addEventListener("click", addScrollSmooth);

function addScrollSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//........Portfolio Section Start animate.........//

const textPfo = document.querySelectorAll(
  ".portfolio .intro-info span h5, .portfolio .intro-info span h1, .portfolio .intro-info span .lead"
);

let option = {
  root: null,
  rootMargin: "-5% 0px",
  threshold: 0,
};

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.visibility = "visible";
      entry.target.style.opacity = 1;
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
      entry.target.style.visibility = "hidden";
      entry.target.style.opacity = 0;
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, option);

textPfo.forEach((item) => {
  observer.observe(item);
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

contentWrapper.each(function() {
  
  const thisWrapper = $(this);
  const thisOverlay = $(this).find(".overlay");
  const thisCard = $(this).find(".card-info");
  const thisTitleCard = $(this).find(".animated-text span, .animated-text i");
  const thisHr = $(this).find("hr");
  const thisAllText = $(this).find(".categorie span, .desc span");
  const thisBtn = $(this).find(".btn");

  // Création de la timeline

  var TL = gsap.timeline({ paused: true });

  TL.to(thisOverlay, { opacity: 1, duration: 0.2 }, 0.1)
  .to(thisCard, { bottom: 400, duration: 0.2 }, 0.5)
  .from(thisTitleCard, { opacity: 0, duration: 0.2, stagger: 0.1 }, 0.7)
  .from(thisHr, { width: 0, duration: 0.2 }, 0.9)
  .from(thisAllText, { opacity: 0, duration: 0.2, stagger: 0.1 }, 1.1)
  .from(thisBtn, { opacity: 0, duration: 0.2 }, 1.3);

  // Evenement au survol de la souris

  thisWrapper.on("mouseover", function() {
    TL.play();
  }).on("mouseout", function() {
    TL.reverse();
  });

})


// ................ Counter up start animate ...................//

// const observeCount = document.querySelector(".count-up");
// const counters = document.querySelectorAll(".stat-count");

// let optionsCount = {
//   root: null,
//   rootMargin: "-10% 0px",
//   threshold: 0
// }

// counter.innerText = "0";
// const updateCounter = () => {
//   const target = +counter.getAttribute('data-target');
//   const c = +counter.innerText;

//   const increment = target / 200;

//   if(c < target){
//     counter.innerText = `${Math.ceil(c + increment)}`;
//     setTimeout(updateCounter, 1);
//   }
// }

// const observerCount = new IntersectionObserver(
//   updateCounter, optionsCount
// )
// counters.forEach(count => {
//   observerCount.observe(count)
// })

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
    url: "../data/count/count-clap.php",
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
    url: "data/count-clap",
    type: "POST",
    success: function (data) {
      clapCount.innerText = data;
    }
  })
}