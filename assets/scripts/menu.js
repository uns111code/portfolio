const navbar = document.querySelector('.nav');;
const btnMenu = document.querySelector('.btn-nav-menu');

// Menu Toggle
btnMenu.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    navbar.classList.toggle('show-nav');
});


const mainButton = document.querySelectorAll('.main-button');

// Close Menu When Clicking On A Link
mainButton.forEach(button => {
    button.addEventListener('click', () => {
    navbar.classList.remove('show-nav');
    btnMenu.classList.remove('active');
});
});