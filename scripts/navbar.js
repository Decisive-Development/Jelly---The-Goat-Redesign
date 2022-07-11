const menuIcon = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.nav-hero');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()   =>  {
    hamburger.classList.toggle("change");
    navbar.classList.toggle("open-menu");
});