import "/src/styles/menu.css";
import image1 from "/src/img/food_table.jpg";
import image2 from "/src/img/food_table.jpg";
import image3 from "/src/img/food_table.jpg";
import image4 from "/src/img/food_table.jpg";

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

  const imageData = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" }
  ]

  const content = document.querySelector("#content");

  // Hero holder
  const hero_div = document.createElement("div");
  hero_div.classList.add("hero-div");
  content.appendChild(hero_div);
  // Hero holder

  // Div 1 (L)
  const menu_container = document.createElement("div");
  menu_container.classList.add("menu-container");

  const menu_title = document.createElement("h1");
  menu_title.classList.add("menu-title");
  menu_title.textContent = "Our menu";
  menu_container.appendChild(menu_title);

  const menu_grid = document.createElement("div");
  menu_grid.classList.add("menu-grid");

  menuGridData.forEach((itemData) => {
    const menu_grid_item = document.createElement("div");
    menu_grid_item.classList.add("grid-item");

    const itemName = document.createElement("h3");
    itemName.classList.add("item-name");
    itemName.textContent = itemData.name;
    menu_grid_item.appendChild(itemName);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-desc");
    itemDesc.textContent = itemData.description;
    menu_grid_item.appendChild(itemDesc);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = itemData.price;
    menu_grid_item.appendChild(itemPrice);

    menu_grid.appendChild(menu_grid_item);
  });

  menu_container.appendChild(menu_grid);
  hero_div.appendChild(menu_container);
  // Div 1 (L)

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
