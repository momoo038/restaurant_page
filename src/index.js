// about.js, home.js and menu.js export their respective functions and return homepage elements
// index.js imports said functions, references main content div as well as the navigation
// adds respective event listeners
// executes loadHome on DOM load

import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadAbout } from "./pages/about.js";
import "/src/styles/index.css"

const content = document.querySelector("#content");

function clearPage() {
  content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
});

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", () => {
  clearPage();
  loadHome();
});

menu.addEventListener("click", () => {
  clearPage();
  loadMenu();
});

about.addEventListener("click", () => {
  clearPage();
  loadAbout();
});
