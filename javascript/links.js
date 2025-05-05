const home = document.getElementById('home');
const sobreMim = document.getElementById('sobre-mim');

home.addEventListener('click', () => {
    scrollToSection('home');

});

sobreMim.addEventListener('click', () => {
    scrollToSection('sobre-mim');
});


