//create variables using ids
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const mainButton = document.querySelector('.main-button');

//when menu is clicked, toggle is-active and active classes on and off
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    mainButton.classList.toggle('hidden');
});