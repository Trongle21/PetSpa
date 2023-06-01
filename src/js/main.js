import page_header from "./components/page_header.js"
import page_footer from "./components/page_footer.js"

/** Render header, footer */

const root = document.querySelector('.root')

const headerContainer = document.createElement('div');
// const main = document.querySelector('main');

headerContainer.appendChild(page_header());

if (root) {
    root.parentNode.insertBefore(headerContainer, root);
}
const footer = page_footer();

if (root) {
    root.insertAdjacentElement('afterend', footer);
}


/** Check active navbar */
var currentURL = window.location.href;

document.querySelectorAll('.header--nav__link--item a').forEach((link) => {
    if (link.href === currentURL) {
        link.parentElement.classList.add('active');
    }
});

/**Show menu navbar */

if (document.querySelector('.header--bar')) {

    document.querySelector('.header--bar').addEventListener('click', (e) => {
        document.querySelector('.header--nav-mb').classList.add('show--nav__bar');
        document.querySelector('.overlay').classList.add('show--overley');
        document.querySelector('.header--bar').classList.add('opacity')
    });

    document.querySelector('.nav--mb_close').addEventListener('click', (e) => {
        document.querySelector('.header--nav-mb').classList.remove('show--nav__bar');
        document.querySelector('.overlay').classList.remove('show--overley');
        document.querySelector('.header--bar').classList.remove('opacity')
    });
    document.querySelector('.overlay').addEventListener('click', (e) => {
        document.querySelector('.header--nav-mb').classList.remove('show--nav__bar');
        document.querySelector('.overlay').classList.remove('show--overley');
        document.querySelector('.header--bar').classList.remove('opacity')
    });
}



// /**Show Cart */

// import { render_cart } from "./pages/product_page.js";

// render_cart()

const productCart = document.querySelector('.product--cart')

document.querySelectorAll('.product--item__btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        productCart.classList.add('show--cart')
    })
})
const closeCart = document.querySelector('.product--cart__info--close')
if (closeCart) {
    closeCart.addEventListener('click', (e) => {
        productCart.classList.remove('show--cart');
    });
}

/**********SERVICE**************/
/** slick */
$(document).ready(function() {
    $('.product--slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

/** Service */

document.querySelectorAll('.service--mb__title').forEach((serviceList) => {
    serviceList.addEventListener('click', () => {
        const content = serviceList.nextElementSibling;
        content.classList.toggle('show--service');
    });
})

/** Scroll */

if (document.querySelector('#service-1'), document.querySelector('#service-2'), document.querySelector('#service-3'), document.querySelector('#service-4')) {
    document.querySelector('#service-1').addEventListener('click', () => {
        const offset = document.querySelector('.scroll--sv-1').offsetTop - 200;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
    document.querySelector('#service-2').addEventListener('click', () => {
        const offset = document.querySelector('.scroll--sv-2').offsetTop - 200;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
    document.querySelector('#service-3').addEventListener('click', () => {
        const offset = document.querySelector('.scroll--sv-3').offsetTop - 200;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
    document.querySelector('#service-4').addEventListener('click', () => {
        const offset = document.querySelector('.scroll--sv-4').offsetTop - 200;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
}

/**** Show signin ****/

/** PC **/

if (document.querySelector('.header--sign-in button')) {
    document.querySelector('.header--sign-in button').addEventListener('click', () => {
        document.querySelector('.main--account__signin').classList.add('show')
        document.querySelector('.overlay').classList.add('show--overley');
    })
    document.querySelector('.overlay').addEventListener('click', (e) => {
        document.querySelector('.main--account__signin').classList.remove('show')
        document.querySelector('.overlay').classList.remove('show--overley');
        document.querySelector('.section--signup__wrapper').classList.remove('blur')
    });
}




/** Moblie & Tablet */
if (document.querySelector('.main--account')) {
    document.querySelector('.main--account').addEventListener('click', () => {
        document.querySelector('.main--account__signin').classList.add('show');
        document.querySelector('.overlay').classList.add('show--overley');
    })
}

/** Signup.html */

if (document.querySelector('.sign--up__form--login p')) {
    document.querySelector('.sign--up__form--login p').addEventListener('click', () => {
        document.querySelector('.main--account__signin').classList.add('show');
        document.querySelector('.overlay').classList.add('show--overley');
        document.querySelector('.section--signup__wrapper').classList.add('blur')
    })

    document.querySelector('.overlay').addEventListener('click', (e) => {
        document.querySelector('.main--account__signin').classList.remove('show')
        document.querySelector('.overlay').classList.remove('show--overley');
        document.querySelector('.section--signup__wrapper').classList.remove('blur')
    });
}

/** API */

import home_page from "./pages/home_page.js"

if (currentURL === 'http://127.0.0.1:5500/index.html') {
    document.querySelector('.root').appendChild(home_page())
}

import { handle_data } from "./pages/product_page.js";


if (currentURL === 'http://127.0.0.1:5500/product.html') {
    const rootElement = document.querySelector('.root');
    const mainElement = handle_data();
    rootElement.appendChild(mainElement);
}