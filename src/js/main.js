import page_header from "./components/page_header.js"
import page_footer from "./components/page_footer.js"

/** Render header, footer */

const root = document.querySelector('.root')

const headerContainer = document.createElement('div');
// const main = document.querySelector('main');

headerContainer.appendChild(page_header());

if (root && location.pathname !== '/signup.html') {
    root.parentNode.insertBefore(headerContainer, root);
}
const footer = page_footer();

if (root && location.pathname !== '/signup.html') {
    root.insertAdjacentElement('afterend', footer);
}


/**** Show signin ****/

if (document.querySelector('.header--sign-in button')) {

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

/** Pay check */

/** API */
let app = {
    /**********HOME**************/
    home_page: async function() {
        let page = await
        import ("./pages/home_page.js");
        document.querySelector('.root').appendChild(await page.home_page());

        /** service scale */
        let plan_price = document.querySelectorAll('.plan--price')
        plan_price.forEach((plan, index) => {
            plan.addEventListener('mouseenter', () => {
                plan_price.forEach((p, i) => {
                    if (i !== index) {
                        p.classList.remove('scale')
                    }
                });
            });
        });


    },
    /**********PRODUCT**************/
    product_page: async function() {
        let page = await
        import ("./pages/product_page.js");
        document.querySelector('.root').appendChild(await page.handle_data());
        await page.fetch_data();

        /** Search */
        document.querySelector('.product--section__search i').addEventListener('click', () => {
            document.querySelector('.product--search').classList.toggle('show');
        });
    },

    /**********SERVICE**************/
    serice_page: async function() {
        let page = await
        import ("./pages/service_page.js");
        document.querySelector('.root').appendChild(await page.service_page());

        /** Service */

        document.querySelectorAll('.service--mb__title').forEach((serviceList) => {
            serviceList.addEventListener('click', () => {
                const content = serviceList.nextElementSibling;
                content.classList.toggle('show--service');
                serviceList.querySelector('.service--mb__icon i').classList.toggle('rotate')
            });
        })

        /** Scroll */
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
    },

    /**********ABOUT**************/

    about_page: async function() {
        let page = await
        import ("./pages/about_page.js");
        document.querySelector('.root').appendChild(await page.about_page());
    },

    /**********Payment**************/

    payment_page: async function() {
        let page = await
        import ("./pages/payment_page.js")
        document.querySelector('.root').appendChild(await page.payment_page());
        page.fetch_product();
    },

    /**********Payment success**************/

    payment_success_page: async function() {
        let page = await
        import ("./pages//payment_success_page.js")
        document.querySelector('.root').appendChild(await page.payment_success_page());
        page.fetch_product();
    },

    /**********SIGN UP**************/
    signup_page: async function() {
        let page = await
        import ("./pages/signup_page.js");
        document.querySelector('.root').appendChild(await page.signup_page());

        /** Sign up */
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
    },
}

if (location.pathname === '/index.html') {
    app.home_page();
}

if (location.pathname === '/product.html') {
    app.product_page();
}

if (location.pathname === '/service.html') {
    app.serice_page();
}

if (location.pathname === '/about.html') {
    app.about_page();
}

if (location.pathname === '/payment.html') {
    app.payment_page();
}

if (location.pathname === '/payment_success.html') {
    app.payment_success_page();
}

if (location.pathname === '/signup.html') {
    app.signup_page();
}