async function contact_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/contact_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">We enjoy our work</div>
                <div class="content--hero__des">You can’t buy happiness but you can buy lil doggo and that’s pretty much it</div>
            </div>
        </div>
    </section>
    <section class="section--contact__form">
        <div class="container">
            <h2>How can we help?</h2>
            <div class="line"></div>
            <form action="" class="contact--form__info">
                <div class="contact--form row">
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="first-name" class="form-lable">First Name</lable>
                            <input name="first-name" type="text" placeholder="Enter your first name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="last-name" class="form-lable">Last Name</lable>
                            <input name="last-name" type="text" placeholder="Enter your last name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="email" class="form-lable">Email</lable>
                            <input name="email" type="text" placeholder="Enter your email">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="phone_number" class="form-lable">Phone Number</lable>
                            <input name="phone_number" type="text" placeholder="Enter your phone_number">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="locaction" class="form-lable">Locaction</lable>
                            <select>
                                <option value="HaNoi">Ha Noi</option>
                                <option value="LaoCai">Lao Cai</option>
                                <option value="DaNang">Da Nang</option>
                                <option value="Ho Chi Minh city">Ho Chi Minh city</option>
                                <span class="form-message"></span>
                            </select>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <lable for="subject" class="form-lable">Subject</lable>
                            <input name="subject" type="text" placeholder="Enter your subject">
                            <span class="form-message"></span>
                        </div>
                    </div>
                </div>
            </form>
            <div class="contact--form__checkbox">
                <h3>SERVICES YOU ARE INTERESTED IN, SELECT ALL THAT APPLY:</h3>
                <div class="contact--form__checkbox--wrapper row">
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="dog-walking" id="dog-walking">
                        <label for="dog-walking">Dog Waking</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="grooming" id="grooming">
                        <label for="grooming">Grooming</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="boarding" id="boarding">
                        <label for="boarding">Boarding</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="pet-sitting" id="pet-sitting">
                        <label for="pet-sitting">Pet Sitting</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="product" id="product">
                        <label for="product">Product</label>
                    </div>
                    <div class="contact--form__checkbox--list l-4 m-4 c-12">
                        <input type="checkbox" name="store" id="store">
                        <label for="store">Store</label>
                    </div>
                    <div class="contact--form__message">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Example text"></textarea>
                    </div>
                </div>
            </div>
            <div class="contact--form__btn">
                <a>
                    <button class="btn btn--secondary">Submit</button>
                </a>
            </div>
        </div>
    </section>
    `;

    main.querySelector('.contact--form__btn').addEventListener('click', () => {
        handle_contact_option(main)
    });

    return main;
}

function handle_contact_option(main) {
    let check_first_name = main.querySelector('input[name="first-name"]');
    let check_last_name = main.querySelector('input[name="last-name"]');
    let check_email = main.querySelector('input[name="email"]');
    let check_phone_number = main.querySelector('input[name="phone_number"]');
    let check_subject = main.querySelector('input[name="subject"]');

    if (check_first_name.value === '') {
        alert('please enter your first name');
        return false;
    }
    if (check_last_name.value === '') {
        alert('please enter your last name');
        return false;
    }
    if (check_email.value === '') {
        alert('please enter your email');
        return false;
    }
    if (check_phone_number.value === '') {
        alert('please enter your phone number');
        return false;
    }
    if (check_subject.value === '') {
        alert('please enter your subject');
        return false;
    }
    if (check_email.value !== '' && check_first_name.value !== '' && check_last_name.value !== '' && check_phone_number.value !== '' && check_subject.value !== '') {
        window.location.href = 'contact_success.html';
    }
}

export { contact_page }