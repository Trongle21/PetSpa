const checkoutData = localStorage.getItem('checkoutData');

export async function fetch_product() {
    if (checkoutData) {
        const parsedData = JSON.parse(checkoutData);
        render_pay_success_product(parsedData)
    }
}

async function render_pay_success_product(params) {
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
                $ ${price}
            </div>
        `;
        document.querySelector('.section--pay__list').appendChild(div)

        total += total_price;
        document.querySelector('.section--pay__info--toal p').innerHTML = `
            $ ${total} 
        `;
    }
}

export async function payment_success_page() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/payment_success_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">Thanks for ordering</div>
                <div class="content--hero__des">See you next time shopping!<div>
            </div>
        </div>
    </section>
    <section class="section--pay">
        <div class="container">
            <div class="path--link">
                <a href="index.html">Home</a>
                <i class="fa-solid fa-chevron-right"></i>
                <h6>Payment Success</h6>
            </div>
            <div class="line"></div>
            <div class="section--pay__wrapper row">
                <div class="section--pay__bill l-8 m-8 c-12">
                    <div class="notification">
                        <div class="noti--icon  ">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="noti--letter">
                            <h2>Thank you for oder my shop</h2>
                            <h4>A letter sent to your email</h4>
                            <h4>Please check your email!</h4>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="infor--user--wrapper">

                    </div>
                </div>
                <div class="section--pay__info l-4 m-4 c-12">
                    <div class="section--pay__info__wrapper">
                        <div class="section--pay__list">

                        </div>
                        <div class="line"></div>
                        <div class="section--pay__info--toal">
                            <h5>Total</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="continue--shopping__btn l-12 m5 c-12" href="product.html">
                    <a href="product.html"></a>
                    <button class="btn btn--primary">
                        Continue shopping
                    </button>
                    <a href="index.html">
                        <button class="btn btn--secondary">
                        Home Page
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;

    function render_bill(params) {
        let { name, email, phone_number, address, country } = params;
        let div = document.createElement('div');
        div.classList.add('infor--user', 'row')
        div.innerHTML = `
            <div class="infor--name l-6 m-5 c-12">
                <h2>Info Customer</h2>
                <h4>${email}</h4>
                <h4>${name}</h4>
                <h4>${phone_number}</h4>
            </div>
            <div class="infor--method l-6 m-5 c-12">
                <h2>Payment Methods</h2>
                <h4>Payment on delivery</h4>
            </div>
            <div class="info--address l-6 m-5 c-12">
                <h2>Adrress</h2>
                <h4>${country}</h4>
                <h4>${address}</h4>
            </div>
            <div class="info--delivery-method l-6 m-5 c-12">
                <h2>Delivery Method</h2>
                <h4>Direct delivery</h4>
            </div>
        `;
        main.querySelector('.infor--user--wrapper').appendChild(div)
    }
    render_bill(userInfo)
    return main;
}