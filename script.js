const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 50) {
        navEl.classList.remove('navbar-scrolled');
    }
});