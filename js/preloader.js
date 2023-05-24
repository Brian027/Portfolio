// Preload start

var tl = gsap.timeline({
  paused: "true"
});

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