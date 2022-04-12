const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav__menu--mobile');

let menuOpen = false;

const mobileMenuItems = document
  .querySelectorAll('.mobile__item')
  .forEach((item) => {
    item.addEventListener('click', () => {
      if (!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
      } else {
        menu.classList.remove('open');
        menuOpen = false;
      }
    });
  });

toggle.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    menuOpen = false;
  }
});

