const hamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const links = document.querySelector(".nav__list");
const sections = document.querySelectorAll(".hero, section");
const hero = document.querySelector(".hero");
const samplesCategories = document.querySelector(".samples__categories");
const samplesCategory = document.querySelectorAll(".samples__category");
const samplesSection = document.querySelector(".samples__samples");
const samplesWeb = document.querySelector(".samples__list--web-dev");
const samplesVideo = document.querySelector(".samples__list--video");

console.log(samplesCategory);

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

samplesCategories.addEventListener("click", changeSamples);

function changeSamples(e) {
  e.preventDefault();

  if (e.target.classList.contains("samples__title")) {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      for (category of samplesCategory) {
        console.log(category);
        category.firstElementChild.classList.toggle("active");
      }
    }
  }
}
