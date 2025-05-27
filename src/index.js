import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadAbout } from "./pages/about.js";
import "/src/styles/index.css"

const content = document.querySelector("#content");

// nav
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about");

const navButtons = [
  { element: homeButton, id: "home" },
  { element: menuButton, id: "menu" },
  { element: aboutButton, id: "about"}
];

function clearPage() {
  content.innerHTML = "";
  content.classList.remove("home-page", "menu-page", "about-page");
}

function setActiveButtonId(activeID) {
  navButtons.forEach(buttonInfo => {
    buttonInfo.element.removeAttribute("id");

    if (buttonInfo.id === activeID) {
      buttonInfo.element.setAttribute("id", buttonInfo.id)
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  setActiveButtonId("home");
  content.classList.add("home-page");
});

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", () => {
  clearPage();
  content.classList.add("home-page");
  loadHome();
  setActiveButtonId("home");
});

menu.addEventListener("click", () => {
  clearPage();
  content.classList.add("menu-page");
  loadMenu();
  setActiveButtonId("menu");
});

about.addEventListener("click", () => {
  clearPage();
  content.classList.add("about-page");
  loadAbout();
  setActiveButtonId("about");
});
