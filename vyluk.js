// Наступний крок - додати JavaScript-код до файлу script.js для забезпечення функціональності веб-сайту. Ось код JavaScript-файлу:

```js
// Код для анімації navbar
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
