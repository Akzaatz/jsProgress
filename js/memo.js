"use strict";
const body = document.body;
const mainMemo = document.getElementsByClassName(".main-memo");
console.log("mainMemo");
const skin = document.getElementById("skin");
const gaz = document.getElementById("gaz");
const dbz = document.getElementById("dbz");

const input = document.getElementById("newTitle");

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  console.log("validé");
});

// skin.addEventListener("click", () => {
//   const color = (body.style.backgroundColor = "");
//   switch (color) {
//     case "red":
//       document.getElementById("color").style.backgroundColor = "#073B4C";
//       break;
//     case "orange":
//       document.getElementById("color").style.backgroundColor = "orange";
//       break;
//     case "yellow":
//       document.getElementById("color").style.backgroundColor = "yellow";
//       break;
//     case "green":
//       document.getElementById("color").style.backgroundColor = "green";
//       break;
//     case "blue":
//       document.getElementById("color").style.backgroundColor = "blue";
//       break;
//     case "indigo":
//       document.getElementById("color").style.backgroundColor = "indigo";
//       break;
//     case "violet":
//       document.getElementById("color").style.backgroundColor = "violet";
//       break;
//   }
//   console.log("color");
// });

gaz.addEventListener("click", () => {
  window.location.href = "../index.html";
});

dbz.addEventListener("click", () => {
  window.location.href = "dbzone.html";
});

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let baliseTitle = document.getElementById("newtitle");
  let newTitle = baliseTitle.value;

  let baliseText = document.getElementById("newtext");
  let newText = baliseText.value;

  console.log(newTitle, newText);
  const chaptersNew = document.querySelector(".new-chapters");
  const chapter = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  chapter.classList.add("chapter");

  h2.textContent = newTitle;
  p.textContent = newText;

  chapter.appendChild(h2);
  chapter.appendChild(p);

  chaptersNew.appendChild(chapter);
});
