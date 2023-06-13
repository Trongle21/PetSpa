async function contact_success_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--contact__success">
        <div class="container">
            <h2>How can we help?</h2>
            <div class="line"></div>
            <div class="contact--success__noti">
                <h3>Thank you! Your submission has been received!</h3>
            </div>
        </div>
    </section>
    `;
    return main;
}

export { contact_success_page }