import switchMenu from './switchMenu' 
import handleHover from './handleHover'
import {sectionObserver} from './observerSections'

export default function eventListeners(){
const menuIcon = document.querySelector(".menu-container");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector("nav");
const navHeight = menu.getBoundingClientRect().height;
const header = document.querySelector("header");
 

function stickyNav (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) menu.classList.add("sticky");
  else menu.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});


headerObserver.observe(header); 

const allSections = document.querySelectorAll(".section");
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// menu
menu.addEventListener("mouseover", handleHover.bind(0.5));
menu.addEventListener("mouseout", handleHover.bind(1));
menuIcon.addEventListener("click", switchMenu);
closeMenuBtn.addEventListener("click", switchMenu);
}