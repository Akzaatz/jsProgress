const bodyKlik = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1"[0]);
const headTag = document.getElementsByClassName("header")[0];

const visible = document.getElementById("visible");
const button = document.createElement("button");
const skinPlayer = document.getElementsByTagName("body")[1];
// console.log(headTag);

const functionLink = document.getElementById("lesFonctions");

let index = 0;

button.href = "index.html";
button.textContent = "gameZone";

bodyKlik.addEventListener("click", () => {
  headTag.insertBefore(button, h1.firstElementChild);
});

button.addEventListener("click", () => {
  window.location.href = "../index.html";
});

functionLink.addEventListener("click", () => {
  window.location.href = "fonctions.html";
});

bodyKlik.addEventListener("click", () => {
  visible.style.opacity = "1";
});

visible.addEventListener("click", nextSkin);

function nextSkin() {
  if (index < 3) {
    document.body.style.backgroundColor = "#073b4c";
    index++;
    document.body.style.backgroundColor = "ffd166";
    index = 0;
    document.body.style.backgroundColor = "#83d483";
  }
}
