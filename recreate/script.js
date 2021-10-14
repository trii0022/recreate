window.addEventListener("load", setup);
const endpoint = "http://triint.dk/recreate/wp-json/wp/v2/";

function setup() {
  document.querySelectorAll(".bikestock main h2");
}

function getTheBikes() {
  fetch("http://triint.dk/recreate/wp-json/wp/v2/bike?per_page=100&_embed")
    .then((res) => res.json())
    .then(setupBikes);
}

function setupBikes(bikeArray) {
  console.log(bikeArray);
  const template = document.querySelector("template#template").textContent;
  const parentElement = document.querySelector(".bikestock main section");
  bikeArray.forEach((bike) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img");
    copy.querySelector(
      "h3"
    ).textContent = `${bike.title.rendered} [${bike.price}]`;
    parentElement.appendChild(copy);
  });
  document.querySelector("main h2").classList.add("open");
  document.querySelector("main section").classList.add("open");
}
