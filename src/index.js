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

const numCourses = 5;

for (i=0; i < numCourses; i++){
    let course = document.getElementById("course-" + i);
    course.addEventListener("click", (e)=>{
        let id = course.id
        for (i=0; i < numCourses;i++){
            let checkElement = document.getElementById("course-" + i);
            if (id != checkElement.id){
                checkElement.dataset.hidden = "true";
            
            }
        }
        
        // course.dataset.hidden = "true";
    })
}
