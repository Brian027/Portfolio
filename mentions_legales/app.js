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
    url: "../data/count-clap",
    type: "POST",
    success: function (data) {
      clapCount.innerText = data;
    }
  })
}