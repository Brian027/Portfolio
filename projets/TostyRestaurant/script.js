const hamburgerBtn = document.querySelector(".navMobileBtn");
const navContainer = document.querySelector(".navigationLinkContainer");

hamburgerBtn.addEventListener("click", () => {

    navContainer.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
    
})