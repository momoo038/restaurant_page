import "/src/styles/about.css";
import aboutImage from "/src/img/about-img.jpg";

function loadAbout() {
  console.log("loadAbout() executed."); // debug

  // Hero holder
  const hero_div = document.createElement("div");
  hero_div.classList.add("hero-div-about");
  content.appendChild(hero_div);
  // Hero holder

  // Image
  const image_container = document.createElement("div");
  image_container.classList.add("image-about");

  const image = document.createElement("img");
  image.src = aboutImage;
  image_container.appendChild(image);

  hero_div.appendChild(image_container);
  // Image

  // Main content div

  const about_container = document.createElement("div");
  about_container.classList.add("about-container");

  const about_title = document.createElement("h1");
  about_title.classList.add("about-title");
  about_title.textContent = "Spooners";

  const about_title2 = document.createElement("h2");
  about_title2.classList.add("about-title2");
  about_title2.textContent = "Where we spoon.";
  about_title.appendChild(about_title2)

  about_container.appendChild(about_title);

  const about_text = document.createElement("div");
  about_text.classList.add("about-text");

  const about_para1 = document.createElement("p");
  about_para1.classList.add("about-para1");
  about_para1.textContent = "Here, traditional techniques and bold new flavors find common ground. Picture a slow-braised local lamb paired with vibrant Mediterranean herbs, or a hand-rolled pasta dish brought to life with a surprising Asian-inspired broth";
  about_text.appendChild(about_para1)

  const about_para2 = document.createElement("p");
  about_para2.classList.add("about-para2");
  about_para2.textContent = "Guided by Founder and Chef Mike Sigma's vision to celebrate a melting pot of tastes, the Spooners embodies the comfort of a home-cooked meal with the thrill of global discovery, all within an elegant yet inviting atmosphere.";
  about_text.appendChild(about_para2)

  const about_para3 = document.createElement("p");
  about_para3.classList.add("about-para3");
  about_para3.textContent = "TASTE THE SIGMA.";
  about_text.appendChild(about_para3)

  about_container.appendChild(about_text);
  hero_div.appendChild(about_container);

  // Main content div

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

export { loadAbout };
