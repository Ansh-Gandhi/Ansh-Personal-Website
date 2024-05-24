// navbar code

window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});