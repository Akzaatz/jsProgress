const task = ["ranger l'atelier", "plant seeds", "watch new moovies"];

for (let i = 0; i < task.length; i++) {
  // console.log(task[i]);
}

const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    console.log(`${e.target.textContent} cliqué !`);
  });
}

const tab = [11, 44, 38, 77, 24];

// console.log(tab);

const a = tab[1];
const b = tab[3];

console.log(a);

// ====== Class - Constructor & Héritage

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  info() {
    return `Nom : ${this.name}\nE-mail : ${this.email}`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.status = "Admin";
  }
  info() {
    return `${super.info()}\nStatus: ${this.emaistatus}`;
  }
}

const greg = new User("Greg", `greg@mail.com`);
const claude = new User("Claude", `claude@mail.com`);
const vanof = new Admin("vanof", "vanof@mail.com");

console.log(vanof.info());

//================SLIDER===========================================
const imgs = document.querySelectorAll(".cont-slides img");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
const cercles = document.querySelectorAll(".cercle");

let index = 0;

next.addEventListener("click", nextSlide);

function nextSlide() {
  if (index < 7) {
    imgs[index].classList.remove("active");
    index++;
    imgs[index].classList.add("active");
  } else if (index === 7) {
    imgs[index].classList.remove("active");
    index = 0;
    imgs[index].classList.add("active");
  }

  for (i = 0; i < cercles.length; i++) {
    if (cercles[i].getAttribute("data-clic") - 1 === index) {
      cercles[i].classList.add("active-cercle");
    } else {
      cercles[i].classList.remove("active-cercle");
    }
  }
}

prev.addEventListener("click", prevSlide);

function prevSlide() {
  if (index > 0) {
    imgs[index].classList.remove("active");
    index--;
    imgs[index].classList.add("active");
  } else if (index === 0) {
    imgs[index].classList.remove("active");
    index = 7;
    imgs[index].classList.add("active");
  }
  for (i = 0; i < cercles.length; i++) {
    if (cercles[i].getAttribute("data-clic") - 1 === index) {
      cercles[i].classList.add("active-cercle");
    } else {
      cercles[i].classList.remove("active-cercle");
    }
  }
}

document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  if (e.keyCode === 37) {
    prevSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  }
}

cercles.forEach((cercle) => {
  cercle.addEventListener("click", function () {
    for (i = 0; i < cercles.length; i++) {
      cercles[i].classList.remove("active-cercle");
    }
    this.classList.add("active-cercle");

    imgs[index].classList.remove("active");
    index = this.getAttribute("data-clic") - 1;
    imgs[index].classList.add("active");
  });
});
