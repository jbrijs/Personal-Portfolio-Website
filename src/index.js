const navbar = document.querySelector('.navbar');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const links = document.querySelector('.links');

// Event listener for hamburger icon click
hamburgerIcon.addEventListener('click', () => {
  links.classList.toggle('active');
});

// Event listener for links click (to hide the links when a link is clicked)
links.addEventListener('click', () => {
  links.classList.remove('active');
});

// Event listener for scrolling (for desktop view)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 768) {
    if (lastScrollY < window.scrollY) {
      navbar.dataset.hidden = 'true';
    } else {
      navbar.dataset.hidden = 'false';
    }
    lastScrollY = window.scrollY;
  }
});


// Event listeners for courses
const numCourses = 5;
const courses = document.querySelectorAll(".courses");

courses.forEach((course) => {
  course.addEventListener("click", handleClick);
  course.addEventListener("hover", ()=>{
    document.getElementById
  })
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

