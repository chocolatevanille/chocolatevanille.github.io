const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// displays mobile menu
const mobileMenu = () => {
    console.log('Mobile menu toggled'); // Add this line
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

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
    } else if (window.innerWidth > 960 && scrollPos < 6700) {

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

// window popup for images
function openPopupLight() {
    document.getElementById("popup-light").style.display = "block";
}

function closePopupLight() {
    document.getElementById("popup-light").style.display = "none";
}

function openPopupDark() {
    document.getElementById("popup-dark").style.display = "block";
}

function closePopupDark() {
    document.getElementById("popup-dark").style.display = "none";
}

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