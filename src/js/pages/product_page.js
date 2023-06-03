var api_url = 'http://localhost:3000/'

let api_course = {
    products: 'products',
}

async function fetch_data() {
    const response = await fetch(api_url + api_course.products, {
        method: 'GET'
    });
    const data = await response.json();
    await handle_data(data);
}
fetch_data()

let products = [{
        "id": 1,
        "name": "Avoderm 1",
        "price": 140000,
        "description": "AvoDerm Grain Free Advanced Healthy Weight Turkey Meal Recipe Dry Dog Food",
        "image": "../src/image/product_1_dog.png"
    }, {
        "id": 2,
        "name": "Avoderm 2",
        "price": 150000,
        "description": "AvoDerm GRAIN FREE CHICKEN & VEGETABLE STEW RECIPE",
        "image": "../src/image/product_2_dog.png"
    },
    {
        "id": 3,
        "name": "Avoderm 3",
        "price": 160000,
        "description": "AvoDerm GRAIN FREE BEEF & POTATO STEW RECIPE",
        "image": "../src/image/product_3_dog.png"
    },
    {
        "id": 4,
        "name": "Avoderm 4",
        "price": 170000,
        "description": "AvoDerm Grain Free Beef & Vegetable Recipe Dry Dog Food",
        "image": "../src/image/product_4_dog.png"
    },
    {
        "id": 5,
        "name": "Avoderm 5",
        "price": 180000,
        "description": "AvoDerm GRAIN FREE CHICKEN & VEGETABLE STEW RECIPE",
        "image": "../src/image/product_5_dog.png"
    },
    {
        "id": 6,
        "name": "Avoderm 6",
        "price": 190000,
        "description": "AvoDerm Grain Free Salmon & Vegetable Recipe Dry Dog Food",
        "image": "../src/image/product_1_dog.png"
    },
    {
        "id": 7,
        "name": "Avoderm 7",
        "price": 200000,
        "description": "AvoDerm GRAIN FREE TURKEY & VEGETABLE STEW RECIPE",
        "image": "../src/image/product_7_dog.png"
    },
    {
        "id": 8,
        "name": "Avoderm 8",
        "price": 210000,
        "description": "Avoderm Joint Health Adult Grain Free Chicken Meal Formula Dry Dog Food",
        "image": "../src/image/product_2_dog.png"
    },
    {
        "id": 9,
        "name": "Avoderm 9",
        "price": 220000,
        "description": "AvoDerm Natural Advanced Sensitive Support Salmon & Oatmeal Formula",
        "image": "../src/image/product_9_dog.png"
    },
    {
        "id": 10,
        "name": "Avoderm 10",
        "price": 230000,
        "description": "Avoderm Natural Chicken Meal and Brown Rice Formula Adult Dry Dog Food",
        "image": "../src/image/product_2_dog.png"
    },
    {
        "id": 11,
        "name": "Fussie Cat 1",
        "price": 240000,
        "description": "Fussie Cat Chicken Purée",
        "image": "../src/image/product_cat_1.jpg"
    },
    {
        "id": 12,
        "name": "Fussie Cat 2",
        "price": 250000,
        "description": "Fussie Cat Chicken with Beef Purée",
        "image": "../src/image/product_cat_2.jpg"
    },
    {
        "id": 13,
        "name": "Fussie Cat 3",
        "price": 260000,
        "description": "Fussie Cat Chicken with Duck Purée",
        "image": "../src/image/product_cat_3.jpg"
    },
    {
        "id": 14,
        "name": "Fussie Cat 4",
        "price": 270000,
        "description": "Fussie Cat Chicken with Liver Purée",
        "image": "../src/image/product_cat_4.jpg"
    },
    {
        "id": 15,
        "name": "Fussie Cat 5",
        "price": 280000,
        "description": "Fussie Cat Chicken with Vegetables Purée",
        "image": "../src/image/product_cat_5.jpg"
    },
    {
        "id": 16,
        "name": "Fussie Cat 6",
        "price": 290000,
        "description": "Fussie Cat Mackerel Purée",
        "image": "../src/image/product_cat_6.jpg"
    },
    {
        "id": 17,
        "name": "Fussie Cat 7",
        "price": 300000,
        "description": "Fussie Cat Market Fresh Grain Free Chicken & Turkey Recipe Dry Cat Food",
        "image": "../src/image/product_cat_7.jpg"
    },
    {
        "id": 18,
        "name": "Fussie Cat 8",
        "price": 310000,
        "description": "Fussie Cat Market Fresh Grain Free Guinea Fowl & Turkey Meal Recipe Dry Cat Food",
        "image": "../src/image/product_cat_8.jpg"
    },
    {
        "id": 19,
        "name": "Fussie Cat 9",
        "price": 320000,
        "description": "Fussie Cat Market Fresh Grain Free Salmon Recipe Dry Cat Food",
        "image": "../src/image/product_cat_1.jpg"
    }, {
        "id": 2,
        "name": "Fussie Cat 10",
        "price": 330000,
        "description": "Fussie Cat Oceanfish Purée",
        "image": "../src/image/product_cat_10.jpg"
    }
]

let cart = {}

export async function handle_data(data) {
    let main = document.createElement('main');
    main.innerHTML = `
                <section class="product--section__hero padding-bottom">
                    <div class="product--slick">
                        <div class="div">
                            <div class="product--slick__image" style="background-image: url('./src/image/slick_3.jpg');"></div>
                        </div>
                    </div>
                </section>
                <section class="product--section ">
                    <div class="container">
                        <div class="product--info">
                            <h4>Cat and Dog</h4>
                            <select name="" id="" class="product--info__select">
                                <option value="cat">Cat selection</option>
                                <option value="cat">Dog selection</option>
                                <option value="cat">Another</option>
                            </select>
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
                </section>

            `;

    async function render_product(params) {
        // if (!params) return false;
        for (let [k, v] of Object.entries(params)) {
            let { id, name, image, price, description } = v;
            const product_list = main.querySelector('.product--list')
            const div = document.createElement('div');
            div.classList.add('product--item');
            div.classList.add('l-3');
            div.classList.add('m-6');
            div.classList.add('c-12');
            div.innerHTML = `
                    <div class="product--item__wrapper">
                        <div class="product--item__image" style="background-image: url(${image});">
                        </div>
                        <div class="product--item__info text-center">
                            <h3>${name}</h3>
                            <p>${description}</p>
                            <h5>${price}<span>$</span></h5>
                        </div>
                        <div class="product--item__btn">
                            <button class="btn btn--primary">Add To Cart</button>
                        </div>
                    </div>
                    `;
            product_list.appendChild(div);
            div.querySelector('.product--item__btn').addEventListener('click', () => {
                add_product(div, v)
            })
        }
    }
    await render_product(products)

    return main;
}

function add_product(div, v) {
    let { id, name, image, price } = v;
    let new_item = {};
    new_item.name = name;
    new_item.quantity = 1;
    new_item.price = price;
    new_item.total_price = price;
    new_item.image = image;

    let key = `${id} - ${name} - ${price}`;

    if (cart[key]) {
        cart[key]['quantity'] += 1;
        cart[key]['total_price'] = cart[key]['quantity'] * cart[key]['price'];
    } else {
        cart[key] = new_item;
    }
    render_cart(cart)
}

function render_cart(cart) {
    let total = 0;
    let product_cart = document.querySelector('.product--cart__pay');
    product_cart.innerHTML = '';
    for (let [k, v] of Object.entries(cart)) {
        let { name, image, price, quantity, total_price } = v;
        let div = document.createElement('div');
        div.classList.add('product--cart__pay--wrapper');
        div.innerHTML = `
            <div class="product--cart__pay--image" style="background-image: url(${image})">
            </div>
            <div class="product--cart__pay--info">
                <h3>${name}</h3>
                <h5>${price}<span> Đ</span></h5>
                <div class="product--quantity">
                    <button>-</button>
                    <p>${quantity}</p>
                    <button>+</button>
                </div>
            </div>
            <div class="horizontal-line">
            </div>
        `;
        product_cart.appendChild(div);

        total += total_price
        document.querySelector('.product--cart__total span').innerHTML = `
            ${total.toLocaleString()}
        `;
    }
}