"use strict";
const body = document.body;
const mainMemo = document.getElementsByClassName(".main-memo");
console.log("mainMemo");
const skin = document.getElementById("skin");
const gaz = document.getElementById("gaz");
const input = document.getElementById("newTitle");

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  console.log("validé");
});

skin.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
  // visible.style.opacity = 1;
});

gaz.addEventListener("click", () => {
  window.location.href = "../index.html";
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
