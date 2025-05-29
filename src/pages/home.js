import { domUtils } from "/src/domUtils.js";
import { loadMenu } from "./menu.js";
import homeImage from "/src/img/home-img.jpg";
import "/src/styles/home.css";

function clearPage() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function loadHome() {
  console.log("loadHome() executed."); // debug

  const content = document.querySelector("#content");

  // Hero holder
  const hero_div = domUtils.createElement("div", { classes: "hero-div" });

  // Image
  const imageElement = domUtils.createImage(homeImage, "Homepage main visual");

  const image_container = domUtils.createElement("div", {
    classes: "image",
    children: [imageElement],
  });
  hero_div.appendChild(image_container);

  // Title
  const main_page_title = domUtils.createElement("div", {
    classes: "title",
    children: [
      domUtils.createElement("h1", {
        classes: "title-home-1",
        textContent: "Hungry?",
      }),
      domUtils.createElement("h1", {
        classes: "title-home-2",
        textContent: "Check out our menu!",
      }),
      domUtils.createElement("p", {
        classes: "title-para",
        textContent:
          "Craving something delicious? Dive into our menu and discover a world of vibrant flavors crafted with passion and the freshest local ingredients. Your next favorite dish is just one click away!",
      }),
      domUtils.createElement("button", {
        classes: "btn",
        textContent: "MENU PAGE",
        listeners: {
          click: () => {
            clearPage();
            loadMenu();
          },
        },
      }),
    ],
  });
  image_container.appendChild(main_page_title);

  // Footer
  const footerLink = domUtils.createElement("a", {
    href: "https://github.com/momoo038",
    textContent: "@momo",
    target: "_blank",
    rel: "noopener noreferrer",
  });

  const textNodeMadeBy = document.createTextNode("made by ");

  const footer_content = domUtils.createElement("h3", {
    classes: "footer_content",
    children: [textNodeMadeBy, footerLink],
  });

  const footer = domUtils.createElement("div", {
    classes: "footer",
    children: [footer_content],
  });

  content.appendChild(hero_div);
  content.appendChild(footer);
}

export { loadHome };
