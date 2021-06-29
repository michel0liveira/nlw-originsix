/* fonçao de abrir e fechar o menu */

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* funçao de fechar o menu qunado clicar no item */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* adicionar efeito no header ao usar o scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
