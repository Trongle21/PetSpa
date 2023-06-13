const checkoutData = localStorage.getItem('checkoutData');

console.log(checkoutData)

export async function fetch_product() {
    if (checkoutData) {
        const parsedData = JSON.parse(checkoutData);
        // console.log(parsedData)
        render_pay_product(parsedData)
    }
}

async function render_pay_product(params) {
    let total = 0;
    for (let [k, v] of Object.entries(params)) {
        let { name, price, total_price, image, quantity } = v;
        let div = document.createElement('div');
        div.classList.add('section--pay__info--product')
        div.innerHTML = `
            <div class="pay--image" style="background-image: url('${image}');">
                <p>${quantity}</p>
            </div>
            <div class="pay--des">
                <h4>${name}</h4>
            </div>
            <div class="pay--price">
                <span>$ </span>${price}
            </div>
        `;
        document.querySelector('.section--pay__list').appendChild(div)

        total += total_price;
        document.querySelector('.section--pay__info--toal p').innerHTML = `
            ${total} 
        `;
    }
}

export async function payment_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--pay">
        <div class="container">
            <div class="path--link">
                <a href="index.html">Home</a>
                <i class="fa-solid fa-chevron-right"></i>
                <h6>Payment</h6>
            </div>
            <div class="line"></div>
            <div class="section--pay__wrapper row">
                <div class="section--pay__bill l-4 m-4 c-12">
                    <div class="section--pay__bill--wrapper">
                        <h3>Infomation</h3>
                        <div class="main--account__form-group">
                            <lable for="em  ail" class="form-lable">Email</lable>
                            <input name="email" type="text" placeholder="Enter your email">
                            <span class="form-message"></span>
                        </div>
                        <div class="main--account__form-group">
                            <lable for="name" class="form-lable">Name</lable>
                            <input name="name" type="text" placeholder="Enter your Name">
                            <span class="form-message"></span>
                        </div>
                        <div class="main--account__form-group">
                            <lable for="phone_number" class="form-lable">Phone number</lable>
                            <input name="phone_number" type="phone_number" placeholder="Enter your phone number">
                            <span class="form-message"></span>
                        </div>
                        <div class="main--account__form-group">
                            <lable for="country" class="form-lable">Country</lable>
                            <select name="country" id="country">
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Japan">Japan</option>
                                <option value="China">China</option>
                                <option value="USA">USA</option>
                                <option value="Singapore">Singapore</option>
                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="main--account__form-group">
                            <lable for="address" class="form-lable">Adress</lable>
                            <input name="address" type="address" placeholder="Enter your Adress">
                            <span class="form-message"></span>
                        </div>
                        <a class="payment--btn">
                            <button class="btn btn--primary">Pay now</button>
                        </a>
                    </div>
                </div>
                <div class="payment--methods l-4 m-4 c-12">
                    <div class="payment--methods__wrapper">
                        <h3>Paymet methods</h3>
                        <label for="bank" type="bank" class="payment">
                            <input type="checkbox" name="bank" id="bank">
                            <label for="bank">Payment by bank transfer</label>
                        </label>
                        <label for="delivery" class="payment">
                            <input type="checkbox" name="delivery" id="delivery">
                            <label for="delivery">Payment on delivery</label>
                        </label>
                    </div>
                </div>
                <div class="line"></div>
                <div class="section--pay__info l-4 m-4 c-12">
                    <div class="section--pay__info__wrapper">
                        <div class="section--pay__list">
     
                        </div>
                        <div class="line"></div>
                        <div class="section--pay__info--toal">
                            <h5>Total</h5>
                            <h4>
                                <span>$</span>
                                <p></p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    main.querySelector('.payment--btn').addEventListener('click', () => {
        handle_pay_option(main);
    })

    /** Check option payment */

    main.querySelectorAll('.payment').forEach((option) => {
        option.addEventListener('click', e => {
            if (e.target.id === "bank") {
                main.querySelector("#delivery").checked = false;
            } else if (e.target.id === "delivery") {
                main.querySelector("#bank").checked = false;
            }
        })
    })

    return main;
}

function handle_pay_option(main) {
    let check_email = main.querySelector('input[name="email"]');
    let check_name = main.querySelector('input[name="name"]');
    let check_phone_number = main.querySelector('input[name="phone_number"]');
    let check_address = main.querySelector('input[name="address"]');

    if (check_email.value === '') {
        alert('please enter your email');
        return false;
    }
    if (check_name.value === '') {
        alert('please enter your name');
        return false;
    }
    if (check_phone_number.value === '') {
        alert('please enter your phone number');
        return false;
    }
    if (check_address.value === '') {
        alert('please enter your address');
        return false;
    }
    if (check_email.value !== '' && check_name.value !== '' && check_phone_number.value !== '' && check_address.value !== '') {
        const email = main.querySelector('input[name="email"]').value;
        const name = main.querySelector('input[name="name"]').value;
        const phone_number = main.querySelector('input[name="phone_number"]').value;
        const address = main.querySelector('input[name="address"]').value;
        const country = main.querySelector('select[name="country"]').value;
        localStorage.setItem('userInfo', JSON.stringify({ name, email, phone_number, address, country }));
        window.location.href = 'payment_success.html';
    }
}