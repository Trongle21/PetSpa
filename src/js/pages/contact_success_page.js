async function contact_success_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/contact_success_bg.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">Thank you for contact</div>
                <div class="content--hero__des">See you next time shopping!</div>
            </div>
        </div>
    </section>
    `;
    return main;
}

export { contact_success_page }