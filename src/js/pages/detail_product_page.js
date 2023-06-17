var api_url = "https://api-data-eight.vercel.app/";

let api_course = {
    products: "products",
};

const checkOutDetailProduct = localStorage.getItem("checkOutDetailProduct");

export async function fetch_data_detail() {
    if (checkOutDetailProduct) {
        const parsedData = JSON.parse(checkOutDetailProduct);
        await render_detail_product(parsedData);
    }
}

let cart = {};

import { fetch_data } from "../helper.js";

async function detail_product_page() {
    let main = document.createElement("main");
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/detail_product_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">Adopt a cat, save the world</div>
                <div class="content--hero__des">For your furry or flying or finned friends.</div>
            </div>
        </div>
    </section>
    <div class="section--detail__padding">
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
                <div class="product--cart__total">
                    <h4>Total</h4>
                    <span>$ 0</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="cart--icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>  
                <div class="path--link">
                    <a href="index.html">Home</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <h6>Detail product</h6>
                </div>
                <div class="line"></div>
                <div class="section--detail__product--wrapper">
                    <section class="section--detail__product">
                    
                    </section>         
                </div>
                <section class="section--product__recommend">
                    <h2 data-aos="fade-down">WE ALSO RECOMMEND</h2>
                    <div class="line"></div>
                    <div class="section--product__slide">
                        <div class="owl-carousel owl-theme slide">
        
                        </div>
                    </div>
            </section>
        </div>
    </div> 
    `;

    let get_data = {
        method: "Get",
        url: api_url + api_course.products,
        body: {},
        async callback(params) {
            await render_slide(params);
        },
    };
    await fetch_data(get_data);

    async function render_slide(params) {
        for (let [k, v] of Object.entries(params)) {
            let { id, name, price, description, image } = v;
            let quantity = 1;
            let div = document.createElement("div");
            div.innerHTML = "";
            div.classList.add("item");
            div.innerHTML = `
                <div class="product--item">
                    <div class="product--item__wrapper">
                    <a class="product--item__image" style="background-image: url('${image}');"></a>
                    <div class="product--item__info text-center">
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <h5><span>$</span>${price}</h5>
                    </div>
                    <div class="product--item__btn">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                    </div>
                </div>
                `;
            main.querySelector(".owl-carousel").appendChild(div);

            /** click slide */
            div.querySelectorAll(".product--item__image").forEach((slide) => {
                slide.addEventListener("click", (e) => {
                    let key = `${id} - ${name} - ${price}`;
                    cart[key] = v;
                    render_detail_product(cart);
                });
            });
        }
    }

    main.querySelector(".cart--icon").addEventListener("click", (e) => {
        const productCart = main.querySelector(".product--cart");
        productCart.classList.add("show--cart");
        let product_cart = document.querySelector(".product--cart__pay");
        if (!Object.keys(cart).length) {
            product_cart.innerHTML = `<p class="text-center">Your cart is empty</p>`;
            return;
        }
        main.querySelector(".cart--icon").classList.add("hidden");
        const closeCart = main.querySelector(".product--cart__info--close");
        if (closeCart) {
            closeCart.addEventListener("click", (e) => {
                productCart.classList.remove("show--cart");
                main.querySelector(".cart--icon").classList.remove("hidden");
            });
        }
    });

    return main;
}

async function render_detail_product(cart) {
    if (!cart) return false;

    const detail_product = document.querySelector(".section--detail__product");
    detail_product.innerHTML = "";
    if (Object.keys(cart).length > 1) {
        let detail = document.querySelector(".section--detail__product--wapper");
        console.log(detail);
    }
    for (let [k, v] of Object.entries(cart)) {
        let { name, price, description, detail, image, image_2, quantity } = v;
        let div = document.createElement("div");
        div.classList.add("section--detail__product--wapper", "row");
        div.innerHTML = `
            <div class="detail--product__image l-5 m-5 c-12">
                <div class="detail--product__image--large zoom" data-aos="fade-down">
                    <div id="myimage" class="detail--product__image--main" style="background-image: url('${image}');">
                    </div>
                    <div id="imgZoom" class="img--main-2" style="background-image: url('${image}');">
                    </div>
                </div>
                <div class="detail--product__image--small">
                    <div class="product--image__small--item" style="background-image: url('${image}');" data-aos="fade-right">

                    </div>
                    <div class="product--image__small--item secondary" style="background-image: url('${image_2}');" data-aos="fade-left">

                    </div>
                </div>
            </div>
            <div class="detail--product__info l-7 m-7 c-12">
                <div class="detail--product__info--wrapper">
                    <h2 data-aos="fade-down">${description}</h2>
                    <h3 data-aos="fade-left">${name}</h3>
                    <h4 data-aos="fade-left"><span>$ </span>${price}</h4>
                    <div class="detail--product__btn" data-aos="fade-down">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                    <div class="detail--product__info--content">
                        <h2 data-aos="fade-left">Description</h2>
                        <div class="line" data-aos="fade-left"></div>
                        <p data-aos="fade-down">${detail}</p>
                    </div>
                </div>
            </div>   
        `;

        detail_product.appendChild(div);

        /** cart */
        document
            .querySelector(".detail--product__btn")
            .addEventListener("click", () => {
                add_detail_cart(v);
            });

        zoom_piture(div);
    }
}

async function add_detail_cart(v) {
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
        cart[key]["quantity"] += 1;
        cart[key]["total_price"] = cart[key]["quantity"] * cart[key]["price"];
    } else {
        cart[key] = new_item;
    }
    render_detail_cart(cart);
}

async function render_detail_cart(cart) {
    /** Show cart */

    const productCart = document.querySelector(".product--cart");
    productCart.classList.add("show--cart");
    const closeCart = document.querySelector(".product--cart__info--close");
    document.querySelector(".cart--icon").classList.add("hidden");
    if (closeCart) {
        closeCart.addEventListener("click", (e) => {
            productCart.classList.remove("show--cart");
            document.querySelector(".cart--icon").classList.remove("hidden");
        });
    }
    let total = 0;
    let product_cart = document.querySelector(".product--cart__pay");
    if (!Object.keys(cart).length) {
        product_cart.innerHTML = `<p class="text-center">Your cart is empty</p>`;
        return;
    }

    product_cart.innerHTML = "";
    if (cart !== undefined && cart !== null) {
        for (let [k, v] of Object.entries(cart)) {
            let { id, name, image, price, quantity, total_price, description } = v;
            let div = document.createElement("div");
            div.innerHTML = "";
            div.classList.add("product--cart__pay--wrapper");
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
            document.querySelector(".product--cart__total span").innerHTML = `
                ${total.toLocaleString()} $
            `;

            // Change quantity product
            change_product(div, k);

            // Delete product
            div
                .querySelector(".product--item__delete")
                .addEventListener("click", () => {
                    delete_product(k);
                });

            // pay
            document
                .querySelector(".product--cart__btn")
                .addEventListener("click", () => {
                    handle_product_data(cart);
                });
        }
    }
}

async function handle_product_data(cart) {
    localStorage.setItem("checkoutData", JSON.stringify(cart));
    // console.log(cart)
    window.location.href = "payment.html";
}

async function change_product(div, k) {
    div.querySelectorAll(".quantity").forEach((input) => {
        input.addEventListener("click", (e) => {
            if (e.target.classList.contains("decrease")) {
                cart[k]["quantity"] -= 1;
                if (cart[k]["quantity"] < 1) {
                    alert("You can not decrease the quatiry of this product anymore");
                    cart[k]["quantity"] = 1;
                } else {
                    cart[k]["total_price"] = cart[k]["quantity"] * cart[k]["price"];
                }
                render_detail_cart(cart);
            }
            if (e.target.classList.contains("increase")) {
                cart[k]["quantity"] += 1;
                cart[k]["total_price"] = cart[k]["quantity"] * cart[k]["price"];
                render_detail_cart(cart);
            }
        });
    });
}

async function delete_product(k) {
    let agree_delete = confirm("You want to remove this product from your cart");
    if (agree_delete === true) {
        delete cart[k];
        if (Object.keys(cart).length === 0) {
            document.querySelector(".product--cart").classList.remove("show--cart");
            document.querySelector(".product--cart__total span").innerHTML = "0 $";
        }
        render_detail_cart(cart);
    }
}

/** Change image main */

function zoom_piture(div) {
    setTimeout(() => {
        let changeImg = div.querySelector(".detail--product__image--main");
        let imgMain2 = div.querySelector(".img--main-2");
        div.querySelectorAll(".product--image__small--item").forEach((picture) => {
            picture.addEventListener("click", (e) => {
                changeImg.style.backgroundImage = e.target.style.backgroundImage;
                imgMain2.style.backgroundImage = e.target.style.backgroundImage;
            });
        });
    }, 300);

    setTimeout(() => {
        let zoom = div.querySelector(".zoom");
        let imgZoom = div.querySelector("#imgZoom");
        if ((zoom, imgZoom)) {
            zoom.addEventListener("mousemove", (event) => {
                imgZoom.style.opacity = 1;
                let positionPx = event.x - zoom.getBoundingClientRect().left;
                let positionX = (positionPx / zoom.offsetWidth) * 100;

                let positionPy = event.y - zoom.getBoundingClientRect().top;
                let positionY = (positionPy / zoom.offsetHeight) * 100;

                let transformX = -(positionX - 50) / 3.5;
                let transformY = -(positionY - 50) / 3.5;

                imgZoom.style.setProperty("--zoom-x", positionX + "%");
                imgZoom.style.setProperty("--zoom-y", positionY + "%");
                imgZoom.style.transform = `
                    scale(1.5)
                    translateX(${transformX}%) translateY(${transformY}%)
                `;
            });

            zoom.addEventListener("mouseout", () => {
                imgZoom.style.opacity = 0;
            });
        }
    }, 400);
}

async function slide() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
}

export { render_detail_product, detail_product_page, slide };