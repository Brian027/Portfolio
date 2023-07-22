// Preload start

const animHeaderEl = document.querySelectorAll(".logo, .nav-toggler");
const lineButtonOne = document.querySelector(".nav-toggler .line.l1");
const lineButtonTwo = document.querySelector(".nav-toggler .line.l2");
const textScrollContent = document.querySelector(".scrollToPortfolio");
const iconScrollBlock = document.querySelector(".scrollToPfo .scrollClick");
const iconScroll = document.querySelector(".scrollToPfo .scrollClick .roundedAnim");
const darkModeBtn = document.querySelector(".dark-mode");
const clapBtnAnim = document.querySelector(".clap-btn");

// Creation de la timeline avec GSAP

var tl = gsap.timeline({
  paused: "true"
});

// Animation du preloader
tl.to("#percent, #bar", {
  duration: .2,
  opacity: 0,
  zIndex: -1
});
tl.to("#preloader", {
  duration: .8,
  height: "0%",
  ease: Expo.easeInOut
},"-=.1");

// Animation de la page d'accueil

tl.fromTo(animHeaderEl, {
  opacity: 0,
  scale: 0.5,
  duration: .8,
},{
  opacity: 1,
  scale: 1,
  duration: .8,
  stagger: 0.5,
  ease: "elastic.out",
})
tl.fromTo(lineButtonOne, {
  width: 0,
  duration: .8,
}, {
  width: "100%",
  duration: .8,
  ease: "ease.in",
}, "-=.2");
tl.fromTo(lineButtonTwo, {
  width: 0,
  duration: .8,
}, {
  width: "70%",
  duration: .8,
  ease: "ease.in",
}, "-=.2");
tl.fromTo(textScrollContent, {
  y: 100,
  duration: 1.5,
}, {
  y: 0,
  duration: 1.5,
  ease: "ease.in",
}, "-=.3");
tl.fromTo(iconScrollBlock, {
  scale: 0,
  duration: .5,
}, {
  scale: 1,
  duration: .5,
  ease: "elastic.out",
}, "-=.3");
tl.fromTo(darkModeBtn,{
  opacity: 0,
  scale: .5,
  duration: .8,
}, {
  opacity: 1,
  scale: 1,
  duration: .8,
  ease: "elastic.out",
}, "-=.2");
tl.fromTo(clapBtnAnim,{
  opacity: 0,
  scale: .5,
  duration: .8,
},{
  opacity: 1,
  scale: 1,
  duration: .8,
  ease: "elastic.out",
},"-=.2");
gsap.to(iconScroll, {
  y: -35,
  duration: .8,
  repeat: -1,
  yoyo: true,
})

// Progress bar animation
var width = 0;
var bar = document.getElementById("barconfrm");
var svgLogo = document.querySelector(".logoLoad");
var id;

function move(){
  id = setInterval(frame,5);
}

move();

function frame(){
  if(width >= 100){
      clearInterval(id);
      tl.play();
  } else {
      width++;
      bar.style.width = width + "%";
      svgLogo.classList.add("active");
      document.getElementById("percent").innerHTML = width + "%";
  }
}