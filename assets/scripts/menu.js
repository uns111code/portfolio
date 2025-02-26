const navbar = document.querySelector('.nav');;
const menu = document.querySelector('.menu');

menu.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    navbar.classList.toggle('show-nav');
});


const mainButton = document.querySelectorAll('.main-button');

mainButton.forEach(button => {
    button.addEventListener('click', () => {
    navbar.classList.remove('show-nav');
    menu.classList.remove('active');
});
});