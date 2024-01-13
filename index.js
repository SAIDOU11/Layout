const closeBtn = document.querySelector('.close-nav');
const openNav = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeBtn.addEventListener('click', function () {
  nav.classList.remove('navigation-open');
});

openNav.addEventListener('click', function () {
  nav.classList.add('navigation-open');
});
