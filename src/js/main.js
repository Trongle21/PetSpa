import headerPage from "./components/page_header.js";
import pageFooter from "./components/page_footer.js";

const root = document.querySelector('root')

const headerContainer = document.createElement('div');
const main = document.querySelector('main');

headerContainer.appendChild(headerPage());

main.parentNode.insertBefore(headerContainer, main);

const footer = pageFooter();
main.insertAdjacentElement('afterend', footer);


/**Show menu navbar */

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


// /**Show Cart */
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

/**Scroll */

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

document.querySelector('.header--sign-in button').addEventListener('click', () => {
    document.querySelector('.main--account__signin').classList.add('show')
    document.querySelector('.overlay').classList.add('show--overley');
})

document.querySelector('.overlay').addEventListener('click', (e) => {
    document.querySelector('.main--account__signin').classList.remove('show')
    document.querySelector('.overlay').classList.remove('show--overley');
});


/** Moblie & Tablet */
document.querySelector('.main--account').addEventListener('click', () => {
    document.querySelector('.main--account__signin').classList.add('show');
    document.querySelector('.overlay').classList.add('show--overley');
})

/** Signup.html */

document.querySelector('.sign--up__form--login p').addEventListener('click', () => {
    document.querySelector('.main--account__signin').classList.add('show');
    document.querySelector('.overlay').classList.add('show--overley');
})
console.log(document.querySelector('.sign--up__form--login p'))