const checkoutData = localStorage.getItem('checkoutData');

export async function fetch_product() {
    if (checkoutData) {
        const parsedData = JSON.parse(checkoutData);
        console.log(parsedData)
    }
}

export async function payment_success_page() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    let main = document.createElement('main');
    main.innerHTML = `

    `;
    return main;
}