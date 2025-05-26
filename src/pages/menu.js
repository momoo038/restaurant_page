function loadMenu() {
  console.log("loadMenu() executed."); // debug

  const content = document.querySelector("#content");

  const content_h1 = document.createElement("h1");
  content_h1.textContent = "This is the Menu page!";
  content_h1.classList.add("content-h1")

  content.appendChild(content_h1)
}

export { loadMenu };
