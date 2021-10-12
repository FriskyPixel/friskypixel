const hamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const links = document.querySelector(".nav__list");
const sections = document.querySelectorAll(".hero, section");
const hero = document.querySelector(".hero");
const samplesCategoryContainer = document.querySelector(".samples__categories");
const samplesCategories = document.querySelectorAll(".samples__category");
const samplesListContainer = document.querySelector(".samples__list-container");
const samplesLists = document.querySelectorAll(".samples__list");

// ****************************************************
// NAV HAMBURGER ANIMATION / MOBILE LINK ACCORDION OPEN
// ****************************************************

hamburger.addEventListener("click", hamburgerAnimation);

function hamburgerAnimation(e) {
  e.preventDefault();

  hamburger.classList.toggle("active");

  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    navList.style.maxHeight = navList.scrollHeight + "px";
  } else {
    navList.style.maxHeight = 0;
  }
}

// ***********************************************
// SCROLL TO SECTION / CLOSE MOBILE LINK ACCORDION
// ***********************************************

navList.addEventListener("click", scrollToSection);

function scrollToSection(e) {
  e.preventDefault();

  let href = e.target.getAttribute("href").replace("#", "");
  document
    .getElementById(href)
    .scrollIntoView({ behavior: "smooth", block: "start" });
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
    navList.style.maxHeight = 0;
  }
}

// **********************
// SET THE ACTIVE SECTION
// **********************

window.addEventListener("resize", setActiveSection);
document.addEventListener("scroll", setActiveSection);

function setActiveSection() {
  let lowestDistanceFromTop; // keeps track of the distance the currently-closest-to-the-top section has
  let currentActiveSection; // holds the section that is closest-to-the-top

  // determines which section is currently closest to the top
  for (section of sections) {
    let currentDistanceFromTop = Math.abs(section.getBoundingClientRect().top);
    if (
      currentDistanceFromTop <= lowestDistanceFromTop ||
      lowestDistanceFromTop === undefined
    ) {
      lowestDistanceFromTop = currentDistanceFromTop;
      currentActiveSection = section;
    }
  }

  // adds "active" class to link with section closest to the top
  for (section of sections) {
    if (section.nodeName === "SECTION") {
      if (section === currentActiveSection) {
        links.querySelector(`a[href="#${section.id}"]`).classList.add("active");
      } else {
        links
          .querySelector(`a[href="#${section.id}"]`)
          .classList.remove("active");
      }
    }
  }
}

// *******************************
// HERO PICTURE PARALLAX SCROLLING
// *******************************

document.addEventListener("scroll", parallax);

function parallax() {
  let offset = window.scrollY * 0.7;
  hero.style.backgroundPositionY = offset + "px";
}

// **********************************
// SAMPLES SECTION CATEGORY SWITCHING
// **********************************

let slideWidth;

// Set the size of each sample category and place them side-by-side
window.addEventListener("resize", setSlideWidth);
document.addEventListener("scroll", setSlideWidth);

function setSlideWidth() {
  slideWidth = samplesLists[0].getBoundingClientRect().width;
  samplesLists[1].style.left = slideWidth + "px";
}

// Change which sample category is active
samplesCategoryContainer.addEventListener("click", changeActiveSample);

function changeActiveSample(e) {
  e.preventDefault();

  let clicked = e.target;

  // Only change the active section if one of the titles was clicked
  if (clicked.classList.contains("samples__title")) {
    // Only change the active section if you click on the non-active title
    if (!clicked.classList.contains("active")) {
      // Change which title is active
      changeCategoryTitle();
      // Change which section is shown
      changeSection();
    }
  }
}

function changeCategoryTitle() {
  for (category of samplesCategories) {
    category.firstElementChild.classList.toggle("active");
  }
}

function changeSection() {
  samplesListContainer.style.transform = samplesLists[0].classList.contains(
    "active"
  )
    ? `translateX(-100%)`
    : `translateX(0)`;

  for (list of samplesLists) {
    list.classList.toggle("active");
  }
}
