// Hamburger-menu

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// Themes

const oddBlocks = document.querySelectorAll("div[class^='block']:nth-child(odd), div[class*=' block']:nth-child(odd)");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const btn = document.querySelector(".change-theme");

btn.addEventListener("click", () => {
    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
    oddBlocks.forEach((block, i) => {
      block.classList.toggle('dark');
    });
})
