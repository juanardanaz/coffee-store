/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll_header'); 
    else header.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader);

/*==================== MIXITUP FILTER PRODUCTS ====================*/ 
let mixerProducts = mixitup('.products_content', {
    selectors: {
        target: '.products_card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */
mixerProducts.filter('.delicacies')

/* Link active products */
const linkProducts = document.querySelectorAll('.products_item');

function activeProducts() {
    linkProducts.forEach(l=> l.classList.remove('active_product'))
    this.classList.add('active_product')
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts))