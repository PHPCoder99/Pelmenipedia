// Reviews

const submitBtn = document.querySelector('.submit-btn');
const textarea = document.querySelector(".review");
const body = document.querySelector("body");

console.log(submitBtn, textarea, body);

submitBtn.addEventListener("click", () => {
  let div = document.createElement("p");
  p.innerHTML = textarea.value;
  body.appendChild(p);
  textarea.value = "";
})

// Themes

const oddBlocks = document.querySelectorAll("div[class^='block']:nth-child(odd), div[class*=' block']:nth-child(odd)");
const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".change-theme");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle('dark');
  navbar.classList.toggle('dark');
  oddBlocks.forEach((block, i) => {
    block.classList.toggle('dark');
  });
})
