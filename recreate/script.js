



window.addEventListener("load", setup);
const endpoint = "http://triint.dk/recreate/wp-json/wp/v2/";
function setup() {
  setupBurgerNav();
}

function setupBurgerNav() {
  const burger = document.querySelector("header svg");
  const nav = document.querySelector("nav");
  burger.addEventListener("click", (e) => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
}

function getTheBikes() {
  fetch("http://triint.dk/recreate/wp-json/wp/v2/bike?per_page=100")
    .then((res) => res.json())
    .then(setupBikes);
}

function setupBikes(bikeArray) {
  console.log(bikeArray);
  const template = document.querySelector("template#template").content;
  const parentElement = document.querySelector("bikestock main section");
  bikeArray.forEach((bike) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src =
      bike._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    copy.querySelector(
      "h2"
    ).textContent = `${bike.title.content} [${bike.price}]`;
    copy.querySelector(".title").textContent = title.title;
    parentElement.appendChild(copy);
  });
}
 

/* fetch("http://triint.dk/recreate/wp-json/wp/v2/bike?per_page=100&_embed")
  .then((res) => res.json())
  .then((data) => console.log(data));

function handleProductList(data) {
  data.forEach(showbike);
}

function showbike(bike) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".title").textContent = bike.title;
   clone.querySelector(".birthname").textContent = superhero.birthname;
  clone.querySelector(".dob").textContent = superhero.dob;
  clone.querySelector(".cape").textContent = superhero.cape;
  clone.querySelector(".powers").textContent = superhero.powers;
  clone.querySelector("img").src = superhero.img;
  clone.querySelector(".gender").textContent = superhero.gender;
  clone.querySelector(".species").textContent = superhero.species; */

  /* const parent = document.querySelector("main");
  parent.appendChild(clone);
} */
 


 

