// about.js, home.js and menu.js export their respective functions and return homepage elements
// index.js imports said functions, references main content div as well as the navigation
// adds respective event listeners
// executes loadHome on DOM load

import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadAbout } from "./pages/about.js";
import "./styles.css"

const content = document.querySelector("#content");

function clearPage() {
  content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", (event) => {
  loadHome();
});

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", (event) => {
  clearPage();
  loadHome();
});

menu.addEventListener("click", (event) => {
  clearPage();
  loadMenu();
});

about.addEventListener("click", (event) => {
  clearPage();
  loadAbout();
});
