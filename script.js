const navEl = document.querySelector('.my-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

window.onload = function () {

    let aboutMeLink = document.getElementById("about-me-link");
    aboutMeLink.addEventListener('click', () => {
        let mobileNavBar = document.getElementById("offcanvasNavbar");
        mobileNavBar.classList.remove("show");
    });

    let projectsLink = document.getElementById("projects-link");
    projectsLink.addEventListener('click', () => {
        let mobileNavBar = document.getElementById("offcanvasNavbar");
        mobileNavBar.classList.remove("show");
    });
}

let date = new Date ();
let year = date.getFullYear();
document.getElementById('currentYear').innerHTML = year;