var api_url = 'http://localhost:3000/'

let api_course = {
    products: 'products',
}

export async function fetch_data() {
    const response = await fetch(api_url + api_course.products, {
        method: 'GET'
    });
    const data = await response.json();
    await render_product(data);
    return data;
}

export async function handle_data() {
    let main = document.createElement('main');
    main.innerHTML = `
            <section class="product--section__hero padding-bottom">
                <div class="product--slick">
                    <div class="div">
                        <div class="product--slick__image" style="background-image: url('./src/image/slick_3.jpg');"></div>
                    </div>
                </div>
            </section>
            <section class="product--section">
                <div class="container">
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
                </div>
            </section>

        `;

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


async function render_product(params) {
    let product_list = document.querySelector('.product--list');
    product_list.innerHTML = '';
    for (let [k, v] of Object.entries(params)) {
        let { id, name, image, price, description } = v;
        let div = document.createElement('div');
        div.classList.add('product--item', 'l-3', 'm-6', 'c-9');
        div.innerHTML = '';
        div.innerHTML = `
            <div class="product--item__wrapper">
                <a href="detail_product.html" class="product--item__image" style="background-image: url(${image});">
                </a href="detail_product.html">
                <div class="product--item__info text-center">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <h5>${price.toLocaleString()}<span> $</span></h5>
                </div>
                <div class="product--item__btn">
                    <button class="btn btn--primary">Add To Cart</button>
                </div>
            </div>
        `;
        product_list.appendChild(div);
        div.querySelector('.product--item__btn').addEventListener('click', () => {
            add_product(v);
        });

        /** Detail Product */
        div.querySelector('.product--item__image').addEventListener('click', () => {
            detail_product(v)
        });
    }

    /** Search */
    let input = document.querySelector('.search--product');
    input.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            product_list.innerHTML = '';
            let key = e.target.value;
            let array = params.filter(item => {
                return item.name.includes(key);
            });
            // clearProductList();
            render_product(array);
        }
    });

    // function clearProductList() {
    //     let product_list = document.querySelector('.product--list');
    //     product_list.innerHTML = '';
    // }

    /** Select */
    function filterProduct(category) {
        const filter = params.filter(product => product.name.includes(category));
        return filter;
    }

    const selectElement = document.querySelector('.product--info__select');
    selectElement.addEventListener('change', () => {
        const selected_category = selectElement.value;
        if (selected_category === 'cat') {
            const filter = filterProduct('Fussie Cat');
            // clearProductList();
            render_product(filter);
        } else if (selected_category === 'dog') {
            const filter = filterProduct('Avoderm');
            // clearProductList();
            render_product(filter);
        } else if (selected_category === 'cat and dog') {
            const filter = filterProduct('Avoderm').concat(filterProduct('Fussie Cat'))
                // clearProductList();
            render_product(filter);
        }
    });
}


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

let cart = {}

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
    for (let [k, v] of Object.entries(cart)) {
        let { name, image, price, quantity, total_price, description } = v;
        let div = document.createElement('div');
        div.innerHTML = '';
        div.classList.add('product--cart__pay--wrapper');
        div.innerHTML = `
        <div class="product--cart__pay--image" style="background-image: url(${image})">
        </div>
        <div class="product--cart__pay--info">
            <h3>${name}</h3>
            <h5>${price.toLocaleString()}<span> $</span></h5>
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

export async function handle_product_data(cart) {
    localStorage.setItem('checkoutData', JSON.stringify(cart));

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

function change_product(div, k) {
    div.querySelectorAll('.quantity').forEach((input) => {
        input.addEventListener('click', (e) => {
            if (e.target.classList.contains('decrease')) {
                cart[k]['quantity'] -= 1;
                if (cart[k]['quantity'] < 1) {
                    alert('You can not decrease the quatiry of this product anymore')
                    cart[k]['quantity'] = 1;
                } else {
                    cart[k]['total_price'] = cart[k]['quantity'] * cart[k]['price']
                }
                render_cart(cart);
            }
            if (e.target.classList.contains('increase')) {
                cart[k]['quantity'] += 1;
                cart[k]['total_price'] = cart[k]['quantity'] * cart[k]['price']
                render_cart(cart);
            }
        })
    })
}