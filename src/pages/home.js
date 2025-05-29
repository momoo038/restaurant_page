import { DomUtils } from "/src/DomUtils.js";
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
  const hero_div = DomUtils.createElement("div", { classes: "hero-div" });

  // Image
  const imageElement = DomUtils.createImage(homeImage, "Homepage main visual");

  const image_container = DomUtils.createElement("div", {
    classes: "image",
    children: [imageElement],
  });
  hero_div.appendChild(image_container);

  // Title
  const main_page_title = DomUtils.createElement("div", {
    classes: "title",
    children: [
      DomUtils.createElement("h1", {
        classes: "title-home-1",
        textContent: "Hungry?",
      }),
      DomUtils.createElement("h1", {
        classes: "title-home-2",
        textContent: "Check out our menu!",
      }),
      DomUtils.createElement("p", {
        classes: "title-para",
        textContent:
          "Craving something delicious? Dive into our menu and discover a world of vibrant flavors crafted with passion and the freshest local ingredients. Your next favorite dish is just one click away!",
      }),
      DomUtils.createElement("button", {
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
  const footerLink = DomUtils.createElement("a", {
    href: "https://github.com/momoo038",
    textContent: "@momo",
    target: "_blank",
    rel: "noopener noreferrer",
  });

  const textNodeMadeBy = document.createTextNode("made by ");

  const footer_content = DomUtils.createElement("h3", {
    classes: "footer_content",
    children: [textNodeMadeBy, footerLink],
  });

  const footer = DomUtils.createElement("div", {
    classes: "footer",
    children: [footer_content],
  });

  content.appendChild(hero_div);
  content.appendChild(footer);
}

export { loadHome };
