let principles = [{
    name: 'Excellence',
    description: 'Be the best while doing our best, both in our personal lives and as a company'
}, {
    name: 'Integrity',
    description: 'The foundation of trust and the fabric of all meaningful relationships – not only with our clients and the pets who rely on us, but also with our team, who we rely on every day'
}, {
    name: 'Passion',
    description: 'For what we do, and the pets we do it for – otherwise why do it?'
}, {
    name: 'Hospitality',
    description: 'How we welcome others into our family – with open arms, courtesy, kindness and a sense of belonging'
}, ]

async function about_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/about_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">You can count on us</div>
                <div class="content--hero__des">Pet sitting is a cost-effective way to comfort the least amount of stress on your animal by allowing your pet to maintain as much of its daily routine as possible</div>
            </div>
        </div>
    </section>
    <section class="about--section">
        <div class="container">
            <div class="path--link">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <h6>Product</h6>
        </div>
        <div class="line"></div>
            <div class="about--section__wrapper">
                <div class="about--section__history row">
                    <div class="about--section__history--info l-4 m-12 c-12">
                        <h3 class="about--title" data-aos="fade-down">Our Story</h3>
                        <h6 data-aos="fade-down">In 2008, founders Mike and Adam—fresh off Wall Street—launched Throw Me A Bone with the idea of creating a more personalized, convenient and accessible pet-care service in New York City. What began as a small but thriving dog-walking
                            business on the Upper East Side quickly became a 10-person operation within two years. By 2011, Throw Me A Bone expanded beyond dog walking to offer pet sitting (for cats, too!), grooming and dog training, providing in-home
                            services across much of Manhattan. In 2017, we opened our first full-service pet care facility in Midtown West complete with a pet spa, playroom, and dog run. Today, we’re operating 7 facility locations with a team of over
                            35 dedicated Pet Care Specialists who provide over 200 services a day across Manhattan, Brooklyn, and Queens. High quality, comprehensive pet care has never been more accessible, and we're proud to be a leader in enhancing
                            the lives of New York City's pets.</h6>
                    </div>
                    <div class="about--section__picture l-7 m-12 c-12" data-aos="fade-down">
                        <div class="about--image" style="background-image: url('/src/image/about_ceo.jpg');">
                        </div>
                    </div>
                </div>
                <div class="about--section__misstion">
                    <div class="about--section__misstion--info text-center">
                        <h3 class="about--title" data-aos="fade-down">Our Mission</h3>
                        <h6 data-aos="fade-down">To enrich the lives of each and every pet in our care while delivering value,</br> convenience, and peace of mind to their owners.</h6>
                    </div>
                </div>
                <div class="about--section__principles row">
                    <div class="about--section__picture l-7 m-12 c-12" data-aos="fade-down">
                        <div class="about--image" style="background-image: url('/src/image/about_2.jpg');">
                        </div>
                    </div>
                    <div class="about--section__principles--info l-4 m-12 c-12">
                        <h3 class="about--title" data-aos="fade-down">Our Guiding Principles</h3>
                        <div class="principles-list">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="cart--icon">
        <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div class="product--cart">
        <div class="product--cart__info">
            <div class="product--cart__info--user">
                <div class="user--image" style="background-image: url('./src/image/Kaio_In_the_world_of_fantasy\(1\).png');">
                </div>
                <h6>Kaiosuke</h6>
            </div>
            <div class="product--cart__info--close">
                <i> <i class="fa-solid fa-xmark"></i></i>
            </div>
        </div>
        <div class="cart--wrapper">
            <div class="product--cart__pay">

            </div>
        </div>
        <div class="product--cart__btn">
            <a href="#">
                <button class="btn btn--secondary ">Palce An Order</button>
            </a>
            <div class="product--cart__total">
                <h4>Total</h4>
                <span>0 $</span>
            </div>
        </div>
    </div>
    `;
    principles.forEach((e) => {
        let { name, description } = e;
        let div = document.createElement('div');
        div.classList.add('principles-list__name')
        div.innerHTML = `
            <h4>${name}</h4>
            <h6>${description}</h6>
        `;
        div.setAttribute('data-aos', 'fade-down')
        main.querySelector('.principles-list').appendChild(div)
    });

    return main;
}

const checkoutDataCart = localStorage.getItem('data_home');

export async function fetch_data_cart() {
    if (checkoutDataCart) {
        const parseData = JSON.parse(checkoutDataCart);
        await render_cart_home(parseData)
    }
}

export async function icon_cart() {
    document.querySelector('.cart--icon').addEventListener('click', (e) => {
        const productCart = document.querySelector('.product--cart');
        productCart.classList.add('show--cart');
        document.querySelector('.cart--icon').classList.add('hidden');
        const closeCart = document.querySelector('.product--cart__info--close');
        if (closeCart) {
            closeCart.addEventListener('click', (e) => {
                productCart.classList.remove('show--cart');
                document.querySelector('.cart--icon').classList.remove('hidden');
            });
        }
    });
}

async function render_cart_home(cart) {
    let product_cart = document.querySelector('.product--cart__pay');
    if (!cart || !Object.entries(cart).length) {
        product_cart.innerHTML = `<p class="text-center">Your cart is empty</p>`;
        return;
    }
    if (cart !== undefined && cart !== null) {
        for (let [k, v] of Object.entries(cart)) {
            let { id, name, image, price, quantity, total_price, description } = v;
            let div = document.createElement('div');
            div.classList.add('product--cart__pay--wrapper');
            div.innerHTML = '';
            div.classList.add('product--cart__pay--wrapper');
            div.innerHTML = `
                    <div class="product--cart__pay--image" style="background-image: url(${image})">
                    </div>
                    <div class="product--cart__pay--info">
                        <h3>${name}</h3>
                        <h5><span>$</span> ${price.toLocaleString()}</h5>
                        <div class="product--quantity">
                            <p class="fw-700">${quantity}</p>
                        </div>
                    </div>
                    <div class="product--item__delete">
                    </div>
                    `;

            product_cart.appendChild(div);

            let total = 0;
            total += total_price;
            document.querySelector('.product--cart__total span').innerHTML = `
               $ ${total.toLocaleString()}
            `;

            localStorage.setItem('data_home', JSON.stringify(cart));

            //  pay 
            document.querySelector('.product--cart__btn .btn--secondary').addEventListener('click', () => {
                handle_product_data(cart)
            })
        }
    }
}

async function handle_product_data(cart) {
    localStorage.setItem('checkoutData', JSON.stringify(cart));
    window.location.href = 'payment.html';
}


export { about_page }