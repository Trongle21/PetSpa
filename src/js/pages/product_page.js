var api_url = 'http://localhost:3000/'

let api_course = {
    products: 'products',
}

let cart = {}

import { fetch_data, change_product } from "../helper.js";

async function handle_data() {
    let main = document.createElement('main');
    main.innerHTML = `
            <section class="product--section__hero>
                <div class="product--slide">
                    <div class="product--slide__image" style="background-image: url('./src/image/slide_3.jpg');"></div>
                </div>
            </section>
            <section class="product--section">
                <div class="container">
                    <div class="path--link padding--top">
                        <a href="index.html">Home</a>
                        <i class="fa-solid fa-chevron-right"></i>
                        <h6>Product</h6>
                    </div>
                    <div class="line"></div>
                <div class="product--section__wrapper"> 
                    <div class="cart--icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="product--info">
                        <h4>Cat and Dog</h4>
                        <div class="product--search">
                            <input class="search--product" type="text" placeholder="search">
                        </div>
                        <div class="product--section__search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <select name="" id="" class="product--info__select">
                            <option value="cat and dog">Cat and Dog</option>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                            </select>
                        </div>
                    </div>
                    <div class="product--list">
       
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
                        <div class="product--cart__pay">
                        </div>
                        <div class="product--cart__btn">
                            <a href="#">
                                <button class="btn btn--secondary ">Palce An Order</button>
                            </a>
                        </div>
                        <div class="product--cart__total">
                            <h4>Total</h4>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="pagination--product">
                    <div class="pagination--item btn--prev">
                        <a class="pagination--item__link">
                            <i class="fa-sharp fa-solid fa-left-long"></i>
                        </a>
                    </div>
                    <div class="pagination--product">
                        <ul>

                        </ul>
                        <div class="pagination--item btn--next">
                            <a class="pagination--item__link">
                                <i class="fa-sharp fa-solid fa-right-long"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        `;

    /** Pagination */
    let per_page = 8;
    let current_page = 1;
    let start = 0;
    let end = per_page;

    let isNextCheck = false;
    let isPrevCheck = false;
    let isChangeCheck = false

    function handle_current_page() {
        start = (current_page - 1) * per_page;
        end = per_page * current_page;
    }

    let get_data = {
        method: 'Get',
        url: api_url + api_course.products,
        body: {},
        async callback(params) {
            await render_product(params);
            await render_pagination(params);
        }
    };

    fetch_data(get_data);

    async function render_pagination(params) {
        let total_page = Math.ceil(params.length / per_page);
        let html = '';
        html += `
        <li class="pagination--item active">
            <a class="pagination--item__link">1</a>
        </li>`;

        for (let i = 2; i <= total_page; i++) {
            html += `
            <li class="pagination--item">
                <a class="pagination--item__link">${i}</a>
            </li>`;
        }

        main.querySelector('.pagination--product ul').innerHTML = html;
    }

    async function render_product(params) {
        let total_page = Math.ceil(params.length / per_page);
        let product_list = main.querySelector('.product--list');
        product_list.innerHTML = '';

        params.map((product, index) => {
            let { id, name, image, price, description } = product;
            let div = document.createElement('div');
            div.classList.add('product--item', 'l-3', 'm-6', 'c-11');
            if (name && index >= start && index < end) {
                div.innerHTML = `
                <div class="product--item__wrapper">
                    <div class="product--item__wrapper">
                    <a class="product--item__image" style="background-image: url(${image});"></a>
                    <div class="product--item__info text-center">
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <h5><span>$</span> ${price.toLocaleString()}</h5>
                    </div>
                    </div>
                    <div class="product--item__btn">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                </div>
                `;

                product_list.appendChild(div);

                div.querySelector('.product--item__btn').addEventListener('click', () => {
                    add_product(product);
                });

                div.querySelector('.product--item__image').addEventListener('click', () => {
                    detail_product(product);
                });
            }
        });
        async function detail_product(params) {
            if (!params) return false;

            let { id, name, price, description, detail, image, image_2 } = params;
            let detail_product = {};
            detail_product.name = name;
            detail_product.quantity = 1;
            detail_product.price = price;
            detail_product.total_price = price;
            detail_product.image = image;
            detail_product.description = description;
            detail_product.detail = detail;
            detail_product.image_2 = image_2;

            let key = ` ${id} - ${name} - ${price}`;

            cart[key] = detail_product;

            localStorage.setItem('checkOutDetailProduct', JSON.stringify(cart));
            window.location.href = 'detail_product.html';
        }

        /** Select Product */
        const selectElement = main.querySelector('.product--info__select');
        let timeout = null;

        selectElement.addEventListener('change', async() => {
            clearTimeout(timeout);
            timeout = setTimeout(async() => {
                const selected_category = selectElement.value;

                get_data.callback = async(params) => {
                    let filtered_products = [];
                    if (selected_category === 'cat and dog') {
                        const filter1 = filterProduct('Fussie Cat', params);
                        const filter2 = filterProduct('Avoderm', params);
                        const filter3 = filterProduct('Smallbatch', params);
                        const filter4 = filterProduct('Bark', params);
                        filtered_products = filter1.concat(filter2).concat(filter3).concat(filter4)
                    } else if (selected_category === 'dog') {
                        const filterdog1 = filterProduct('Avoderm', params);
                        const filterdog2 = filterProduct('Bark', params);
                        filtered_products = filterdog1.concat(filterdog2)
                    } else if (selected_category === 'cat') {
                        const filtercat1 = filterProduct('Fussie Cat', params);
                        const filtercat2 = filterProduct('Smallbatch', params);
                        filtered_products = filtercat1.concat(filtercat2);
                    } else {
                        filtered_products = params;
                    }


                    total_page = Math.ceil(filtered_products.length / per_page);
                    await render_product(filtered_products);
                    await render_pagination(filtered_products)
                };

                await fetch_data(get_data);
            }, 500);
        });

        /** Filter Product */
        function filterProduct(category, products) {
            const filter = products.filter(product => product.name.includes(category));
            return filter;
        }

        /** Change page */

        setTimeout(() => {
            async function change_pagination() {
                let pagination_items = main.querySelectorAll('.pagination--product ul li');
                for (let i = 0; i < pagination_items.length; i++) {
                    pagination_items[i].addEventListener('click', () => {
                        let value = i + 1;
                        current_page = value;
                        for (let j = 0; j < pagination_items.length; j++) {
                            pagination_items[j].classList.remove('active');
                        }
                        pagination_items[i].classList.add('active');

                        if (current_page === 1) {
                            main.querySelector('.btn--prev').classList.add('click');
                        }
                        if (current_page !== 1) {
                            main.querySelector('.btn--prev').classList.remove('click');
                        }
                        if (current_page === total_page) {
                            main.querySelector('.btn--next').classList.add('click');
                        }
                        if (current_page !== total_page) {
                            main.querySelector('.btn--next').classList.remove('click');
                        }
                        handle_current_page(current_page);
                        render_product(params);

                        change_pagination()
                    });
                }
            }

            change_pagination()
        }, 500)


        /** Next page */

        async function next_btn() {
            const next_btn = main.querySelector('.btn--next');
            if (!isNextCheck) {
                next_btn.addEventListener('click', () => {
                    current_page++;
                    if (current_page > total_page) {
                        current_page = total_page;
                    }
                    main.querySelector('.btn--prev').classList.remove('click');
                    if (current_page === total_page) {
                        main.querySelector('.btn--next').classList.add('click');
                    }

                    let pagination_items = main.querySelectorAll('.pagination--product ul li');
                    pagination_items.forEach((e, index) => {
                        e.classList.remove('active');
                        if (index === current_page - 1) {
                            e.classList.add('active')
                        }
                    })
                    handle_current_page(current_page);
                    render_product(params);
                })
                isNextCheck = true;
            }
        }
        next_btn()


        /** Back page */

        async function prev_btn() {
            const prev_btn = main.querySelector('.btn--prev');
            if (!isPrevCheck) {
                prev_btn.addEventListener('click', () => {
                    current_page--;
                    if (current_page <= 1) {
                        current_page = 1;
                    }
                    main.querySelector('.btn--next').classList.remove('click');
                    if (current_page === 1) {
                        main.querySelector('.btn--prev').classList.add('click');
                    }
                    let pagination_items = main.querySelectorAll('.pagination--product ul li');
                    pagination_items.forEach((e, index) => {
                        e.classList.remove('active');
                        if (index === current_page - 1) {
                            e.classList.add('active')
                        }
                    })
                    handle_current_page(current_page)
                    render_product(params);

                })
                isPrevCheck = true;
            }
        }
        prev_btn()
    }

    /** Search product */

    let input = main.querySelector('.search--product');
    let timeout = null;

    input.addEventListener('input', async(e) => {
        clearTimeout(timeout);
        timeout = setTimeout(async() => {
            let key = e.target.value;

            get_data.callback = async(params) => {
                let filtered_products = params.filter(product => product.name.toLowerCase().includes(key));
                await render_product(filtered_products);
            };

            await fetch_data(get_data);
        }, 500);
    });


    /** Show cart */

    main.querySelector('.cart--icon').addEventListener('click', (e) => {
        const productCart = main.querySelector('.product--cart');
        productCart.classList.add('show--cart');
        main.querySelector('.cart--icon').classList.add('hidden');
        const closeCart = main.querySelector('.product--cart__info--close');
        if (closeCart) {
            closeCart.addEventListener('click', (e) => {
                productCart.classList.remove('show--cart');
                main.querySelector('.cart--icon').classList.remove('hidden');
            });
        }
    });
    return main;
}

/** Detail Product */

function add_product(v) {
    let { id, name, image, price, description } = v;
    let new_item = {};
    new_item.name = name;
    new_item.quantity = 1;
    new_item.price = price;
    new_item.total_price = price;
    new_item.image = image;
    new_item.description = description;

    let key = `${id} - ${name} - ${price}`;
    if (cart[key]) {
        cart[key]['quantity'] += 1;
        cart[key]['total_price'] = cart[key]['quantity'] * cart[key]['price'];
    } else {
        cart[key] = new_item;
    }
    render_cart(cart);
}


function render_cart(cart) {
    /** Show cart */

    const productCart = document.querySelector('.product--cart');
    productCart.classList.add('show--cart');
    const closeCart = document.querySelector('.product--cart__info--close');
    document.querySelector('.cart--icon').classList.add('hidden');
    if (closeCart) {
        closeCart.addEventListener('click', (e) => {
            productCart.classList.remove('show--cart');
            document.querySelector('.cart--icon').classList.remove('hidden');
        });
    }
    let total = 0;
    let product_cart = document.querySelector('.product--cart__pay');
    product_cart.innerHTML = '';
    if (cart !== undefined && cart !== null) {
        for (let [k, v] of Object.entries(cart)) {
            let { id, name, image, price, quantity, total_price, description } = v;
            console.log(k)
            let div = document.createElement('div');
            div.innerHTML = '';
            div.classList.add('product--cart__pay--wrapper');
            div.innerHTML = `
        <div class="product--cart__pay--image" style="background-image: url(${image})">
        </div>
        <div class="product--cart__pay--info">
            <h3>${name}</h3>
            <h5><span>$</span> ${price.toLocaleString()}</h5>
            <div class="product--quantity">
                <button class="quantity decrease">-</button>
                <p>${quantity}</p>
                <button class="quantity increase">+</button>
            </div>
        </div>
        <div class="product--item__delete">
            <button>Delete</button>
        </div>
    `;

            product_cart.appendChild(div);

            total += total_price;
            document.querySelector('.product--cart__total span').innerHTML = `
                ${total.toLocaleString()} $
            `;

            // Change quantity product
            change_product(div, k);

            // Delete product
            div.querySelector('.product--item__delete').addEventListener('click', () => {
                delete_product(k);
            });

            // pay 
            document.querySelector('.product--cart__btn').addEventListener('click', () => {
                handle_product_data(cart)
            })
        }
    }
}

async function handle_product_data(cart) {
    localStorage.setItem('checkoutData', JSON.stringify(cart));
    // console.log(cart)
    window.location.href = 'payment.html';
}

function delete_product(k) {
    let agree_delete = confirm('You want to remove this product from your cart');
    if (agree_delete === true) {
        delete cart[k];
        if (Object.keys(cart).length === 0) {
            document.querySelector('.product--cart').classList.remove('show--cart');
        }
        render_cart(cart);
    }
}

export { handle_data, render_cart, cart }