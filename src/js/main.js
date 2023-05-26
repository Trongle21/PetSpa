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
    document.querySelector('.overlay').classList.add('show--overLay');
});

document.querySelector('.nav--mb_close').addEventListener('click', (e) => {
    document.querySelector('.header--nav-mb').classList.remove('show--nav__bar');
    document.querySelector('.overlay').classList.remove('show--overLay');
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