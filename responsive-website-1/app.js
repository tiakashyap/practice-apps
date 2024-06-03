//create variables using ids
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

//when menu is clicked, toggle is-active and active classes on and off
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});