const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.navbar-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


