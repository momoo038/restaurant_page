import { domUtils } from "/src/domUtils.js";
import "/src/styles/menu.css";
import menuGridData from "/src/Data/menuGridData.json"

function loadMenu() {
  console.log("loadMenu() executed."); // debug

  const content = document.querySelector("#content");

  // Hero holder
  const hero_div = domUtils.createElement("div", { classes: "hero-div" });
  // Hero holder

  // Div 1 (L)
  const menu_container = domUtils.createElement("div", {
    classes: "menu-container",
    children: [
      domUtils.createElement("h1", {
        classes: "menu-title",
        textContent: "Our menu",
      }),
      domUtils.createElement("div", {
        classes: "menu-grid",
        children: menuGridData.map((itemData) => {
          return domUtils.createElement("div", {
            classes: "grid-item",
            children: [
              domUtils.createElement("h3", {
                classes: "item-name",
                textContent: itemData.name,
              }),
              domUtils.createElement("p", {
                classes: "item-desc",
                textContent: itemData.description,
              }),
              domUtils.createElement("span", {
                classes: "item-price",
                textContent: itemData.price,
              }),
            ],
          });
        })
      }),
    ]
  });

  hero_div.appendChild(menu_container);
  // Div 1 (L)

  content.appendChild(hero_div);

  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const footer_content = document.createElement("h3");
  footer_content.classList.add("footer_content");
  footer_content.appendChild(document.createTextNode("made by "));

  const link = document.createElement("a");
  link.href = "https://github.com/momoo038";
  link.textContent = "@momo";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  footer_content.appendChild(link);
  footer.appendChild(footer_content);

  content.appendChild(footer);
  // Footer
}

export { loadMenu };
