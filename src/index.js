// about.js, home.js and menu.js export their respective functions and return homepage elements
// index.js imports said functions, references main content div as well as the navigation
// adds respective event listeners
// executes loadHome on DOM load

import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadAbout } from "./pages/about.js";


document.addEventListener("DOMContentLoaded", (event) => {
    loadHome();
})