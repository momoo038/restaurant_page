import { domUtils } from "/src/domUtils.js";
import "/src/styles/menu.css";

function loadMenu() {
  console.log("loadMenu() executed."); // debug

  const menuGridData = [
    {
      name: "Bruschetta al Pomodoro",
      description:
        "Toasted artisan bread topped with fresh, vibrant diced tomatoes, minced garlic, fresh basil, and a generous drizzle of extra virgin olive oil.",
      price: "€7.50",
    },
    {
      name: "French Onion Soup",
      description:
        "A rich, savory beef broth brimming with caramelized onions, topped with a crusty crouton and melted Gruyère cheese, served gratinéed.",
      price: "€9.00",
    },
    {
      name: "Wiener Schnitzel",
      description:
        "A traditional Austrian dish of tender, breaded veal cutlet, pan-fried to golden perfection. Served with parsley potatoes and a lemon wedge.",
      price: "€19.50",
    },
    {
      name: "Mushroom Risotto (Risotto ai Funghi)",
      description:
        "Creamy Arborio rice slow-cooked with a medley of wild mushrooms, Parmesan cheese, white wine, and finished with a hint of truffle oil.",
      price: "€16.00",
    },
    {
      name: "Grilled Salmon with Asparagus",
      description:
        "A perfectly grilled salmon fillet with a crispy skin, served alongside tender-crisp roasted asparagus and a light lemon-butter sauce.",
      price: "€21.00",
    },
    {
      name: "Tiramisu Classico",
      description:
        "An iconic Italian dessert. Layers of coffee-soaked ladyfingers and a rich, whipped mascarpone cream, elegantly dusted with cocoa powder.",
      price: "€8.50",
    },
  ];

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
        }),
      }),
    ],
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
