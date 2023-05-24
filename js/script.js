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

scrollToPfo.addEventListener("click", addScrollSmooth)

function addScrollSmooth(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

//........Portfolio Section Start animate.........//

const items = document.querySelectorAll(".grid-item");
const textPfo = document.querySelectorAll(".portfolio .intro-info span h5, .portfolio .intro-info span h1, .portfolio .intro-info span .lead");

let option = {
  root: null,
  rootMargin: "-5% 0px",
  threshold: 0
}

function handleIntersect(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.visibility = "visible";
      entry.target.style.opacity= 1;
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
      entry.target.style.visibility = "hidden";
      entry.target.style.opacity= 0;
    }
  })
}

const observer = new IntersectionObserver(
  handleIntersect, option
)

textPfo.forEach(item => {
  observer.observe(item)
})

items.forEach(item => {
  observer.observe(item)
})

// const gridItem = document.querySelector(".portfolio .grid-container .grid-item");
// const cardItem = document.querySelector(".portfolio .grid-container .grid-item .card-info");
// const titleCard = document.querySelector(".portfolio .grid-container .grid-item .card-info h5 span");
// const titleCategorie = document.querySelector(".portfolio .grid-container .grid-item .card-info .categorie span");
// const logoCard = document.querySelector(".portfolio .grid-container .grid-item .card-info .categorie i");
// const separation = document.querySelector(".portfolio .grid-container .grid-item .card-info hr");
// const txtBodyCard = document.querySelector(".portfolio .grid-container .grid-item .card-info ");
// const btnCard = document.querySelector(".portfolio .grid-container .grid-item .card-info .btn");

// const TLCARD = gsap.timeline({
//   default: {
//     ease: "power2",
//     duration: 0.3,
//   },
//   paused: true,
// })

// TLCARD
// .to(cardItem,{bottom: 400, duration: 0.2}, '-=0.1')
// .from(titleCard,{bottom: 400, duration: 0.2}, '-=0.1')
// .from(titleCategorie,{opacity: 0, duration: 0.2}, '-=0.1')
// .from(logoCard,{scale: 0, duration: 0.2}, '-=0.1')
// .from(separation,{width: 0, duration: 0.2}, '-=0.2')
// .from(txtBodyCard,{opacity: 0, duration: 0.3}, '-=0.1')
// .from(btnCard,{scale: 0, duration: 0.2}, '-=0.1')

// gridItem.addEventListener('mouseenter', () => {
//     TLCARD.play();
//   })

// gridItem.addEventListener('mouseleave', () => {
//   TLCARD.reverse();
// })

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