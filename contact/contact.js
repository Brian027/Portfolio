//........Contact Section Start animate.........//

const textCtc = document.querySelectorAll("#contact .intro-info span h5, #contact .intro-info span h1, #contact .intro-info span .lead");
const formCtc = document.querySelectorAll(".contact-form");

let options = {
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

const observe = new IntersectionObserver(
  handleIntersect, options
)

textCtc.forEach(item => {
  observe.observe(item)
})

formCtc.forEach(item => {
  observe.observe(item)
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