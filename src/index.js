

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;


window.addEventListener("scroll", ()=> {
    if (lastScrollY < window.scrollY){
        console.log("we are going down");
        navbar.dataset.hidden = "true";
    }
    else{
        console.log("we are going up");
        navbar.dataset.hidden = "false";
    }

    lastScrollY = window.scrollY;
})