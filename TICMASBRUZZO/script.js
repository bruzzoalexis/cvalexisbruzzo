const header = document.querySelector('header');
const colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  header.style.backgroundColor = "#" + randomColor;
});

const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
