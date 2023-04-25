// Preload start
// const loader = document.querySelector(".loader");

// window.addEventListener("load", () => {
//   loader.classList.add("fondu-out");
//   setTimeout(() => (loader.style.display = "none"), 1000);
// });
// Preload end

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
  if(window.pageYOffset > 100){
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
})

/* ***************** Back to Top End**********************/

//........Home Section Start animate.........//

let homeH2 = document.querySelector(".home-page .text-hero");

var tl = gsap.timeline();

tl.from(homeH2, 0.5, { y: 50, opacity: 0, delay: 1, ease: Back.ease }, 0.1);

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

const rsLinkHome = document.querySelectorAll(".home-page .social-links a");
const btnAbout = document.querySelector(".home-page .cta-home");

window.addEventListener("load", () => {
  tl.from(
    rsLinkHome,
    0.2,
    { y: 50, opacity: 0, delay: 2, ease: Back.ease },
    0.3
  );
  tl.from(btnAbout, 0.2, { y: 20, opacity: 0, delay: 2, ease: Back.ease }, 0.5);
});

const scrollToPfo = document.querySelector(".scrollToPortfolio");

scrollToPfo.addEventListener("click", addScrollSmooth)

function addScrollSmooth(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

//........Portfolio Section Start animate.........//

const items = document.querySelectorAll(".grid-item");

let options = {
  root: null,
  rootMargin: "-1% 0px",
  threshold: 0
}

function handleIntersect(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
      entry.target.style.opacity = 0;
    }
  })
}

const observer = new IntersectionObserver(
  handleIntersect, options
)

items.forEach(item => {
  observer.observe(item)
})


// ................ Counter up start animate ...................//

// const observeCount = document.querySelector(".count-up");
const counters = document.querySelectorAll(".stat-count");

// let optionsCount = {
//   root: null,
//   rootMargin: "-10% 0px",
//   threshold: 0
// }

// function countIntersect(counters){
  
// }

// const observerCount = new IntersectionObserver(
//   countIntersect, optionsCount
// )

// counters.forEach(item => {
//   observer.observe(item)
// })

counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;
    
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  }
  updateCounter()
})

//................. Dark mode start ............................//

const body = document.querySelector("body"),
  btnToggle = document.querySelector(".dark-mode");
const iconBtn = document.querySelector(".dark-mode i");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
}

if(body.classList.contains("dark")){
  btnToggle.innerHTML = '<img src="img/sun.svg" alt="icone soleil">';
} else {
  btnToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
}

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});