
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

// Event listeners for courses
const numCourses = 5;
const courses = document.querySelectorAll(".courses");

courses.forEach((course) => {
  course.addEventListener("click", handleClick);
});

function handleClick(event) {
  const selectedCourse = event.currentTarget;
  const selectedId = selectedCourse.id;

  courses.forEach((course) => {
    if (course.id !== selectedId) {
      course.dataset.hidden = "true";
    } else {
      course.dataset.flipped = "true";
      course.removeEventListener("click", handleClick);

      course.addEventListener("click", handleReset);
    }
  });
}

function handleReset(event) {
  const resetCourse = event.currentTarget;

  courses.forEach((course) => {
    course.dataset.hidden = "false";
  });

  resetCourse.dataset.flipped = "false";
  resetCourse.removeEventListener("click", handleReset);
  resetCourse.addEventListener("click", handleClick);
}
