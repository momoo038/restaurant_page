import { loadMenu } from "./menu.js";
import homeImage from "/src/img/home-img.jpg";

function clearPage() {
  content.innerHTML = "";
}

function loadHome() {
  console.log("loadHome() executed."); // debug

  const content = document.querySelector("#content");

  // Hero holder
  const hero_div = document.createElement("div");
  hero_div.classList.add("hero-div");
  content.appendChild(hero_div);
  // Hero holder

  // Image
  const image_container = document.createElement("div");
  image_container.classList.add("image");

  const image = document.createElement("img");
  image.src = homeImage;
  image_container.appendChild(image);

  hero_div.appendChild(image_container);
  // Image

  // Title
  const title_container = document.createElement("div");
  title_container.classList.add("title");

  const title_1 = document.createElement("h1");
  title_1.textContent = "Hungry?";
  title_1.classList.add("title-home-1");
  title_container.appendChild(title_1);

  const title_2 = document.createElement("h1");
  title_2.textContent = "Check out our menu!";
  title_2.classList.add("title-home-2");
  title_container.appendChild(title_2);

  const title_para = document.createElement("p")
  title_para.textContent = "Craving something delicious? Dive into our menu and discover a world of vibrant flavors crafted with passion and the freshest local ingredients. Your next favorite dish is just one click away!";
  title_para.classList.add("title-para");
  title_container.appendChild(title_para)

  image_container.appendChild(title_container);
  // Title

  // Button
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    clearPage();
    loadMenu();
  })
  button.textContent = "MENU PAGE";
  button.classList.add("btn");
  title_container.appendChild(button);
  // Button
}

export { loadHome };
