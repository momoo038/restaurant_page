import "/src/styles/menu.css"

function loadMenu() {
  console.log("loadMenu() executed."); // debug

  console.log("loadHome() executed."); // debug

  const content = document.querySelector("#content");

  // Hero holder
  const hero_div = document.createElement("div");
  hero_div.classList.add("hero-div");
  content.appendChild(hero_div);
  // Hero holder


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
