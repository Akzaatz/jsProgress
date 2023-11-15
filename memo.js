const bodyKlik = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1"[0]);
const headTag = document.getElementsByClassName("header")[0];

const button = document.createElement("button");
const removeButton = document.getElementsByTagName("body")[1];
console.log(headTag);

const functionLink = document.getElementById("lesFonctions");
const variables = document.getElementById("variables");

button.href = "index.html";
button.textContent = "gameZone";

bodyKlik.addEventListener("click", () => {
  headTag.insertBefore(button, h1.firstElementChild);
});

button.addEventListener("click", () => {
  window.location.href = "index.html";
});

if (document.getElementsByTagName("button") !== null) {
} else
  removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("youpi");
  });

functionLink.addEventListener("click", () => {
  window.location.href = "fonctions.html";
});

variables.addEventListener("click", () => {
  // e.preventDefault();
  if ((document.body.style.backgroundColor = "rgb(3, 36, 44)")) {
    document.body.style.backgroundColor = "rgb(14, 1, 49)";
  }
});

// variables.addEventListener("click", () => {
//   // e.preventDefault();
//   if ((document.body.style.backgroundColor = "grey")) {
//     document.body.style.backgroundColor = "blue";
//   }
// });

// variables.addEventListener("click", () => {
//   // e.preventDefault();
//   if ((document.body.style.backgroundColor = "blue")) {
//     document.body.style.backgroundColor = "rgb(3, 36, 44)";
//   }
// });
