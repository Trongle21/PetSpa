let data_service = [{
    id: 'service-1',
    name: 'Dog Walking'
}, {
    id: 'service-2',
    name: 'Grooming'
}, {
    id: 'service-3',
    name: 'Boarding'
}, {
    id: 'service-4',
    name: 'Pet Sitting'
}, ]

let dog_walking = {
    '30 minus': [{
            name: '10 Walk Pack',
            price: 285,
        },
        {
            name: '20 Walk Pack',
            price: 540,
        },
        {
            name: '50 Walk Pack',
            price: 1020,
        }
    ],
    '60 minus': [{
            name: '10 Walk Pack',
            price: 475,
        },
        {
            name: '20 Walk Pack',
            price: 900,
        },
        {
            name: '50 Walk Pack',
            price: 1700,
        }
    ]
}

let grooming = {
    'Luxury Bath': [{
            name: 'Bath & blow dry',
        },
        {
            name: 'Ear cleaning',
        },
        {
            name: 'Nail trim',
        },
        {
            name: 'Paw pad trim',
        },
        {
            name: 'Blueberry facial',
        },
    ],
    'Full Groom': [{
            name: 'Hair cut & style',
        },
        {
            name: 'Bath & blow dry',
        },
        {
            name: 'Ear cleaning',
        },
        {
            name: 'Nail trim',
        },
        {
            name: 'Paw pad trim',
        },
        {
            name: 'Sanitary trim',
        },
    ]
}

let boarding = {
    '30 minus': [{
            name: 'Bath & blow dry',
            price: 100,
            time: 'Night',
        },
        {
            name: 'Ear cleaning',
            price: 95,
            time: 'Night',
        },
        {
            name: 'Nail trim',
            price: 90,
            time: 'Night',
        }
    ]
}

let pet_sitting = {
    '30 minus': [{
            name: 'Cat Visit',
            price: 40,
        },
        {
            name: 'Puppy Visit',
            price: 40,
        },
    ]
}

async function service_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/service_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">We love pets too</div>
                <div class="content--hero__des">Your pet will have the environment of home, familiar smells, sights, and sounds, as well as food and treats<div>
            </div>
        </div>
    </section>
    <section class="service--section__page pc container--padding">
        <div class="container--service">
            <div class="path--link" data-aos="fade-right">
                <a href="index.html">Home</a>
                <i class="fa-solid fa-chevron-right"></i>
                <h6>Service</h6>
            </div>
        <div class="line"></div>
            <!-- PC -->
            <div class="service--section__page--warpper_pc row">        
                <div class="service--section__page--list">
                    <ul>

                    </ul>
                </div>
                <div class="service--section__page-info l-10 m-10">
                    <div class="service--blog scroll--sv-1 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2" data-aos="fade-right">
                                <img src="./src/image/service_1.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6 data-aos="fade-right">Pet Walking</h6>
                                    <a data-aos="fade-left" href="service_book.html">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5 data-aos="fade-down">
                                    Monday - Friday / 9:00am - 7:00pm
                                </h5>
                                <p data-aos="fade-down">
                                    Your Pet's well-being relies upon routine and consistency, which is why we assign them a designated Pet Care Specialist and regular pick-up window.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info cheap l-6 m-6">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6 data-aos="fade-right">30 Minus</h6>
                                            <h6 data-aos="fade-right">$30</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                    <div class="service--content__info expensive l-6 m-6">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6 data-aos="fade-left">60 Minus</h6>
                                            <h6 data-aos="fade-left">$50</h6>
                                        </div>
                                        <ul>
       
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-2 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2" data-aos="fade-right">
                                <img src="./src/image/service_2.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6 data-aos="fade-right">Grooming</h6>
                                    <a data-aos="fade-left" href="service_book.html">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5 data-aos="fade-down">
                                    Monday - Sunday / 8:00am - 6:00pm
                                </h5>
                                <p data-aos="fade-down">
                                    We offer a full range of spa and grooming services. All grooming options include a complete organic and hypoallergenic bath as well as detailed nose-to-tail attention. Pricing may vary due to size, the condition of the coat, matting, knots and the length
                                    of hair.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info luxury--bath l-6 m-6">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6 data-aos="fade-right">The Luxury Bath</h6>
                                            <h6 data-aos="fade-right">$50</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                    <div class="service--content__info full--groom l-6 m-6">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6 data-aos="fade-left">The Full Groom</h6>
                                            <h6 data-aos="fade-left">$120</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-3 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2" data-aos="fade-right">
                                <img src="./src/image/service_3.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6 data-aos="fade-right">Boarding</h6>
                                    <a data-aos="fade-right" href="service_book.html">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                    <a data-aos="fade-left" href="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st">
                                        <button class="btn btn--primary">Book LIC</button>
                                    </a>
                                </div>
                                <h5 data-aos="fade-down">
                                    Monday - Sunday / 24 hours
                                </h5>
                                <p data-aos="fade-down">
                                    Our overnight boarding service offers a convenient solution for our more active dogs. Each 24 hour stay includes daycare, relief walks, all feedings and daily photos. Live play cam is also available during daycare hours to check in when you'd like and
                                    see how your Pet is doing.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info boarding l-12 m-12">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6 data-aos="fade-down">Boarding *</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-4 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2" data-aos="fade-right">
                                <img src="./src/image/service_4.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6 data-aos="fade-right">Pet Sitting</h6>
                                    <a data-aos="fade-left" href="service_book.html">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5 data-aos="fade-down">
                                    Monday - Sunday / 8:00am - 6:00pm
                                </h5>
                                <p data-aos="fade-down">
                                    For cats and puppies. Each 30-minute visit includes feeding/fresh water, litter/crate maintenance, and indoor playtime. Relief walks can be provided for puppies upon request.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info pet--sitting l-12 m-12">
                                        <div class="service--content__price" data-aos="fade-down">
                                            <h6>Pet Sitting</h6>
                                        </div>
                                        <ul>
     
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Moblie -->
            <div class="service--section__page--wrapper_mb">
                <div class="service--section__page--list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_1.webp" alt="">
                            <h6>Pet Walking</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="service_book.html">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Friday / 9:00am - 7:00pm
                                        </h5>
                                        <p>
                                            Your Pet's well-being relies upon routine and consistency, which is why we assign them a designated Pet Care Specialist and regular pick-up window.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>30 Minus</h6>
                                                    <h6>$30</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>10 Walk Pack</h6>
                                                        <h6>$285</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>20 Walk Pack</h6>
                                                        <h6>$540</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>50 Walk Pack</h6>
                                                        <h6>$1020</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>60 Minus</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>10 Walk Pack</h6>
                                                        <h6>$475</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>20 Walk Pack</h6>
                                                        <h6>$900</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>50 Walk Pack</h6>
                                                        <h6>$1700</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page--list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_2.webp" alt="">
                            <h6>Grooming</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="service_book.html">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 8:00am - 6:00pm
                                        </h5>
                                        <p>
                                            We offer a full range of spa and grooming services. All grooming options include a complete organic and hypoallergenic bath as well as detailed nose-to-tail attention. Pricing may vary due to size, the condition of the coat, matting, knots and the length
                                            of hair.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>The Luxury Bath</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Paw pad trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Blueberry facial</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>The Luxury Bath</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Hair cut & style</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Paw pad trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Sanitary trim</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page--list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_3.webp" alt="">
                            <h6>Boarding</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="service_book.html">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                            <a href="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st">
                                                <button class="btn btn--primary">Book Boarding LIC</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 24 hours
                                        </h5>
                                        <p>
                                            Our overnight boarding service offers a convenient solution for our more active dogs. Each 24 hour stay includes daycare, relief walks, all feedings and daily photos. Live play cam is also available during daycare hours to check in when you'd like and
                                            see how your Pet is doing.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>Boarding *</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                        <h6>$100 / Night</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                        <h6>$95 / Night</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                        <h6>$90 / Night</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page--list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_4.webp" alt="">
                            <h6>Pet Sitting</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="service_book.html">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 8:00am - 6:00pm
                                        </h5>
                                        <p>
                                            For cats and puppies. Each 30-minute visit includes feeding/fresh water, litter/crate maintenance, and indoor playtime. Relief walks can be provided for puppies upon request.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>Pet Sitting</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Cat Visit</h6>
                                                        <h6>$40</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Puppy Visit</h6>
                                                        <h6>$50</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="cart--icon">
        <i class="fa-solid fa-cart-shopping"></i>
        <div class="quantity--product">
            <div class="number">
                    
            </div>
        </div>
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

    data_service.forEach((service) => {
        let service_section = main.querySelector('.service--section__page--list ul');
        let li = document.createElement('li');
        li.innerHTML = `
           ${service.name}
        `;
        li.setAttribute('data-aos', 'fade-down');
        li.setAttribute('id', service.id);
        service_section.appendChild(li);
    });

    // redenr service dog walking
    dog_walking['30 minus'].forEach(item => {
        let service = main.querySelector('.cheap ul');
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        `;
        li.setAttribute('data-aos', 'fade-down')
        service.appendChild(li)
    });

    dog_walking['60 minus'].forEach(item => {
        let service = main.querySelector('.expensive ul');
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        `;
        li.setAttribute('data-aos', 'fade-down');
        service.appendChild(li)
    });

    // redenr service grooming
    grooming['Luxury Bath'].forEach(item => {
        let service = main.querySelector('.luxury--bath ul');
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        `;
        li.setAttribute('data-aos', 'fade-down');
        service.appendChild(li);
    });
    grooming['Full Groom'].forEach(item => {
        let service = main.querySelector('.full--groom ul');
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        `;
        li.setAttribute('data-aos', 'fade-down');
        service.appendChild(li);
    });

    // redenr service broading  
    boarding['30 minus'].forEach(item => {
        let service = main.querySelector('.boarding ul');
        let li = document.createElement('li');
        li.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price} / ${item.time}</p>
        `;
        li.setAttribute('data-aos', 'fade-down');
        service.appendChild(li);
    });

    // redenr service pet sitting  
    pet_sitting['30 minus'].forEach(item => {
        let service = main.querySelector('.pet--sitting ul');
        let li = document.createElement('li');
        li.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            `;
        li.setAttribute('data-aos', 'fade-down');
        service.appendChild(li);
    });


    return main;
}

const checkoutDataCart = localStorage.getItem('data_home');

export async function fetch_data_cart() {
    if (checkoutDataCart) {
        const parseData = JSON.parse(checkoutDataCart);
        await render_cart_home(parseData);
        await render_quantity_product(parseData);
    }
}

async function render_quantity_product(cart) {
    let number = Object.keys(cart).length;
    let quantity_product = document.querySelector('.quantity--product');
    if (number > 0) {
        let div = document.createElement('div');
        div.classList.add('number');
        div.innerHTML = `
       ${number}
        `;
        quantity_product.appendChild(div);
    } else {
        quantity_product.style.display = 'none';
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


export { service_page }