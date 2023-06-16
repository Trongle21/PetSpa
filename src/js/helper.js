var api_url = 'http://localhost:3000/'

let api_course = {
    products: 'products',
}

let request = {
    method: 'GET',
    url: api_url + api_course.products,
    body: {},
    callback: function callback(response) {

    }
}

async function fetch_data(request) {
    let { method, url, body, callback } = request;
    const data = await fetch(url, {
        method: method
    });
    const response = await data.json();
    await callback(response)
}


fetch_data(request)

/** Change product */

import { render_cart, cart } from "./pages/product_page.js";
import { render_detail_product } from "./pages/detail_product_page.js"

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
export { fetch_data, change_product }