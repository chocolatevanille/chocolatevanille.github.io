const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')


// shows active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const offerMenu = document.querySelector('#offer-page');
    const projectsMenu = document.querySelector('#projects-page');
    let scrollPos = window.scrollY;

    // adds 'highlight' class to menu items
    if(window.innerWidth > 960 && scrollPos < 440) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1300) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        offerMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2200) {
        offerMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 8800) { //add 800 per project card

        projectsMenu.classList.add('highlight');
        offerMenu.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// closes mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content li a');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    // adjusts scroll to individual projects (provides offset)
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = -95; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY + offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });

});
