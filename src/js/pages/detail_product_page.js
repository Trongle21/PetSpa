var api_url = 'http://localhost:3000/'

let api_course = {
    products: 'products',
}

const checkOutDetailProduct = localStorage.getItem('checkOutDetailProduct')

export async function fetch_data_detail() {
    if (checkOutDetailProduct) {
        const parsedData = JSON.parse(checkOutDetailProduct);
        await render_detail_product(parsedData)
    }
}

let cart = {}

import { change_product, fetch_data } from "../helper.js";

async function detail_product_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <div class="container section--detail__padding">
        <div class="path--link">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <h6>Detail product</h6>
        </div>
        <div class="line"></div>
        <section class="section--detail__product">
         
        </section>
        <section class="section--product__recommend">
            <h2>WE ALSO RECOMMEND</h2>
            <div class="line"></div>
            <div class="section--product__slide">
                <div class="owl-carousel owl-theme slide">
                <div class="item">
                    <div class="product--item">
                        <div class="product--item__wrapper">
                        <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                        <div class="product--item__info text-center">
                            <h3>Name</h3>
                            <p>Descriptioon</p>
                            <h5><span>$</span>4</h5>
                        </div>
                        <div class="product--item__btn">
                            <button class="btn btn--primary">Add To Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
                    <div class="item">
                        <div class="product--item">
                            <div class="product--item__wrapper">
                            <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                            <div class="product--item__info text-center">
                                <h3>Name</h3>
                                <p>Descriptioon</p>
                                <h5><span>$</span>4</h5>
                            </div>
                            <div class="product--item__btn">
                                <button class="btn btn--primary">Add To Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                    <div class="product--item">
                        <div class="product--item__wrapper">
                        <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                        <div class="product--item__info text-center">
                            <h3>Name</h3>
                            <p>Descriptioon</p>
                            <h5><span>$</span>4</h5>
                        </div>
                        <div class="product--item__btn">
                            <button class="btn btn--primary">Add To Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                <div class="product--item">
                    <div class="product--item__wrapper">
                    <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                    <div class="product--item__info text-center">
                        <h3>Name</h3>
                        <p>Descriptioon</p>
                        <h5><span>$</span>4</h5>
                    </div>
                    <div class="product--item__btn">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="product--item">
                    <div class="product--item__wrapper">
                    <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                    <div class="product--item__info text-center">
                        <h3>Name</h3>
                        <p>Descriptioon</p>
                        <h5><span>$</span>4</h5>
                    </div>
                    <div class="product--item__btn">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="item">
            <div class="product--item">
                <div class="product--item__wrapper">
                <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
                <div class="product--item__info text-center">
                    <h3>Name</h3>
                    <p>Descriptioon</p>
                    <h5><span>$</span>4</h5>
                </div>
                <div class="product--item__btn">
                    <button class="btn btn--primary">Add To Cart</button>
                </div>
                </div>
            </div>
        </div>
        <div class="item">
        <div class="product--item">
            <div class="product--item__wrapper">
            <a href="detail_product.html" class="product--item__image" style="background-image: url('/src/image/product_cat_1.webp');"></a>
            <div class="product--item__info text-center">
                <h3>Name</h3>
                <p>Descriptioon</p>
                <h5><span>$</span>4</h5>
            </div>
            <div class="product--item__btn">
                <button class="btn btn--primary">Add To Cart</button>
            </div>
            </div>
        </div>
    </div>
                </div>
            </div>
        </section>
    </div> 
    `;


    // let get_data = {
    //     method: 'Get',
    //     url: api_url + api_course.products,
    //     body: {},
    //     async callback(params) {
    //         await render_slide(params)
    //     }
    // }
    // fetch_data(get_data)

    // async function render_slide(params) {
    //     let div = document.createElement('div');
    //     div.classList.add('item')
    //     div.innerHTML = `
    //             <h1>1</h1>
    //         `;
    //     main.querySelector('.owl-carousel').appendChild(div)
    //     console.log(document.querySelector('.item'));
    // }

    return main;
}

async function render_detail_product(params) {
    if (!params) return false;
    for (let [k, v] of Object.entries(params)) {
        let { name, price, description, detail, image, image_2, quantity } = v;
        let div = document.createElement('div');
        div.classList.add('section--detail__product--wapper', 'row')
        div.innerHTML = `
            <div class="detail--product__image l-5 m-5 c-12">
                <div class="detail--product__image--large zoom">
                    <div id="myimage" class="detail--product__image--main" style="background-image: url('${image}');">
                    </div>
                    <div id="imgZoom" class="img--main-2" style="background-image: url('${image}');">
                    </div>
                </div>
                <div class="detail--product__image--small">
                    <div class="product--image__small--item" style="background-image: url('${image}');">

                    </div>
                    <div class="product--image__small--item secondary" style="background-image: url('${image_2}');">

                    </div>
                </div>
            </div>
            <div class="detail--product__info l-7 m-7 c-12">
                <div class="detail--product__info--wrapper">
                    <h2>${description}</h2>
                    <h3>${name}</h3>
                    <h4><span>$ </span>${price}</h4>
                    <div class="product--quantity">
                        <button class="quantity decrease">-</button>
                        <p>${quantity}</p>
                        <button class="quantity increase">+</button>
                    </div>
                    <div class="detail--product__btn">
                        <button class="btn btn--primary">Add To Cart</button>
                    </div>
                    <div class="detail--product__info--content">
                        <h2>Description</h2>
                        <div class="line"></div>
                        <p>${detail}</p>
                    </div>
                </div>
            </div>   
        `;

        /** Change Product */
        change_product(div, k);

        /** Select Picture */

        document.querySelector('.section--detail__product').appendChild(div);

    }
}

/** Change image main */

setTimeout(() => {
    let changeImg = document.querySelector('.detail--product__image--main');
    let imgMain2 = document.querySelector('.img--main-2');
    document.querySelectorAll('.product--image__small--item').forEach((picture) => {
        picture.addEventListener('click', (e) => {
            changeImg.style.backgroundImage = e.target.style.backgroundImage;
            imgMain2.style.backgroundImage = e.target.style.backgroundImage;
        });
    });
}, 300)

setTimeout(() => {
    let zoom = document.querySelector('.zoom');
    let imgZoom = document.querySelector('#imgZoom');
    if (zoom, imgZoom) {
        zoom.addEventListener('mousemove', (event) => {
            imgZoom.style.opacity = 1;
            let positionPx = event.x - zoom.getBoundingClientRect().left;
            let positionX = (positionPx / zoom.offsetWidth) * 100;

            let positionPy = event.y - zoom.getBoundingClientRect().top;
            let positionY = (positionPy / zoom.offsetHeight) * 100;

            let transformX = -(positionX - 50) / 3.5;
            let transformY = -(positionY - 50) / 3.5;

            imgZoom.style.setProperty('--zoom-x', positionX + '%');
            imgZoom.style.setProperty('--zoom-y', positionY + '%');
            imgZoom.style.transform = `
                scale(1.5)
                translateX(${transformX}%) translateY(${transformY}%)
            `;
        });

        zoom.addEventListener('mouseout', () => {
            imgZoom.style.opacity = 0;
        });
    }
}, 400);



async function slide() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
}

export { render_detail_product, detail_product_page, slide }