
// Navbar is hidden when scrolling down, visible when scrolling up
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", ()=> {
    if (lastScrollY < window.scrollY){
        navbar.dataset.hidden = "true";
    } else{
        navbar.dataset.hidden = "false";
    }

    lastScrollY = window.scrollY;
})

