// Preload
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');
    setTimeout(() =>loader.style.display="none", 2000)
})
