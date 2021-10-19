window.addEventListener("load", setup);
const endpoint = "http://triint.dk/recreate/wp-json/wp/v2/";

function setup() {
  const h2s = document.querySelectorAll(".discography main h2");
  if (h2s) {
    h2s.forEach(h2=>{
        h2.addEventListener("click", (e) => {
          h2.classList.toggle("open");
          h2.nextElementSibling.classList.toggle("open");
        });
      });
  }
  setupBurgerNav();
  getCategories();
}

function setupAccordion() {
  const h2s = document.querySelectorAll(".discography main h2");
  if (h2s) {
    h2s.forEach(h2=>{
        h2.addEventListener("click", (e) => {
          h2.classList.toggle("open");
          h2.nextElementSibling.classList.toggle("open");
        });
      });
  }
}

function setupBurgerNav() {
  const burger = document.querySelector("header svg");
  const nav = document.querySelector("nav");
  burger.addEventListener("click", (e) => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
}

function getCategories() {
  fetch(endpoint + "categories?parent=6&_fields=name")
    .then(res=>{
      return res.json();
    })
    .then(setupCategories);
  getTheAlbums();
  console.log("#");
}

function getTheAlbums() {
  fetch("http://triint.dk/recreate/wp-json/wp/v2/album?per_page=100&_embed")
    .then(res=>{
      return res.json();
    })
    .then(setupAlbums);
}
function setupAlbums(albumArray) {
  console.log(albumArray);
  const template = document.querySelector("template#albumtemplate").content;
  const parentElement = document.querySelector(".discography main section");
  albumArray.forEach(album=>{
      const copy = template.cloneNode(true);
      /*   copy.querySelector("img").src =
          album._embedded[
            "wp:featuredmedia"
          ][0].media.details.sizes.full.source_url; */
      copy.querySelector(
        "h3"
      ).textContent = `${album.title.rendered} [${album.year}]`;
      parentElement.appendChild(copy);
    });

  document.querySelector("main h2").classList.add("open");
  document.querySelector("main section.collapsible").classList.add("open");
}

function setupCategories(catArray) {
  const template = document.querySelector("template#categorytemplate").content;
  const parentElement = document.querySelector("main");
  catArray.forEach(cat=>{
      const copy = template.cloneNode(true);
      copy.querySelector("h2").textContent = cat.name;
      parentElement.appendChild(copy);
    });
  /*   document.querySelector("main h2").classList.add("open"); */
  /*   document.querySelector("main section.collapsible").classList.add("open"); */
  setupAccordion();
  getTheAlbums();
}
