const gaz = document.getElementById("gaz");
const memo = document.getElementById("memo");

gaz.addEventListener("click", () => {
  window.location.href = "../index.html";
});

memo.addEventListener("click", () => {
  window.location.href = "memo.html";
});

// async function getworks() {
//   const response = await fetch("http://localhost:3000/works");
//   console.log(response);
// }

// getworks();

let form = document.querySelector("form");
let baliseNom = document.getElementById("nom");

function verifierChamp(balise) {
  if (balise.value === "") {
    balise.classList.add("error");
  } else {
    balise.classList.remove("error");
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    verifierChamp(baliseNom);
  });
}
