import render_cart from "./pages/product_page.js"

import products from "../js/";

function add_product(div, products) {
    for (let [k, v] of Object.entries(products)) {
        let { name, image, price } = v;
        console.log(name);
    }
}

export { add_product }