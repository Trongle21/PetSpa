async function contact_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/contact_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">We enjoy our work</div>
                <div class="content--hero__des">You can’t buy happiness but you can buy lil doggo and that’s pretty much it</div>
            </div>
        </div>
    </section>
    <section class="section--contact__form">
        <div class="container">
            <div>
                <div class="path--link">
                <a href="index.html">Home</a>
                <i class="fa-solid fa-chevron-right"></i>
                <h6>Contact</h6>
            </div>
            <div class="line"></div>
            <h2>How can we help?</h2>
            <form action="" class="contact--form__info">
                <div class="contact--form row">
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="first-name" class="form-label">First Name</label>
                            <input name="first-name" type="text" placeholder="Enter your first name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="last-name" class="form-label">Last Name</label>
                            <input name="last-name" type="text" placeholder="Enter your last name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="email" class="form-label">Email</label>
                            <input name="email" type="text" placeholder="Enter your email">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="phone_number" class="form-label">Phone Number</label>
                            <input name="phone_number" type="text" placeholder="Enter your phone number">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="locaction" class="form-label">Locaction</label>
                            <select>
                                <option value="HaNoi">Ha Noi</option>
                                <option value="LaoCai">Lao Cai</option>
                                <option value="DaNang">Da Nang</option>
                                <option value="Ho Chi Minh city">Ho Chi Minh city</option>
                                <span class="form-message"></span>
                            </select>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="subject" class="form-label">Subject</label>
                            <input name="subject" type="text" placeholder="Enter your subject">
                            <span class="form-message"></span>
                        </div>
                    </div>
                </div>
            </form>
            <div class="contact--form__checkbox">
                <h3>SERVICES YOU ARE INTERESTED IN, SELECT ALL THAT APPLY:</h3>
                <div class="contact--form__checkbox--wrapper row">
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="dog-walking" id="dog-walking">
                        <label for="dog-walking">Dog Waking</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="grooming" id="grooming">
                        <label for="grooming">Grooming</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="boarding" id="boarding">
                        <label for="boarding">Boarding</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="pet-sitting" id="pet-sitting">
                        <label for="pet-sitting">Pet Sitting</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="product" id="product">
                        <label for="product">Product</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="store" id="store">
                        <label for="store">Store</label>
                    </div>
                    <div class="contact--form__message">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Example text"></textarea>
                    </div>
                </div>
            </div>
            <div class="contact--form__btn">
                <a>
                    <button class="btn btn--secondary">Submit</button>
                </a>
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

    main.querySelector('.contact--form__btn').addEventListener('click', () => {
        handle_contact_option(main)
    });

    return main;
}

function handle_contact_option(main) {
    let check_first_name = main.querySelector('input[name="first-name"]');
    let check_last_name = main.querySelector('input[name="last-name"]');
    let check_email = main.querySelector('input[name="email"]');
    let check_phone_number = main.querySelector('input[name="phone_number"]');
    let check_subject = main.querySelector('input[name="subject"]');

    if (check_first_name.value === '') {
        alert('please enter your first name');
        return false;
    }
    if (check_last_name.value === '') {
        alert('please enter your last name');
        return false;
    }
    if (check_email.value === '') {
        alert('please enter your email');
        return false;
    }
    if (check_phone_number.value === '') {
        alert('please enter your phone number');
        return false;
    }
    if (check_subject.value === '') {
        alert('please enter your subject');
        return false;
    }
    if (check_email.value !== '' && check_first_name.value !== '' && check_last_name.value !== '' && check_phone_number.value !== '' && check_subject.value !== '') {
        window.location.href = 'contact_success.html';
    }
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

export { contact_page }