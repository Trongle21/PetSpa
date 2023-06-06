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