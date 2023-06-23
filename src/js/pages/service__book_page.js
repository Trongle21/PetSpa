export async function service_book_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--hero">
        <div class="section--hero__image" style="background-image: url('./src/image/service_bg_1.jpg');">
            <div class="section--hero__wrapper">
                <div class="content--hero__name">We love pets too</div>
                <div class="content--hero__des">Your pet will have the environment of home, familiar smells, sights, and sounds, as well as food and treats
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section--service__book">
        <div class="container">
            <h2>REQUEST A MEET & GREET</h2>
            <h6>
                Ready to bring your pup in for daycare?</br>
                Please complete the form below to schedule your dog's Meet & Greet.
            </h6>
            <div class="contact--form__info first service--book">
                <div class="contact--form row">
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="first-name" class="form-label">First Name</label>
                            <input name="first-name" type="text" placeholder="Enter your first name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="last-name" class="form-label">Last Name</label>
                            <input name="last-name" type="text" placeholder="Enter your last name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="email" class="form-label">Email</label>
                            <input name="email" type="text" placeholder="Enter your email">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="phone_number" class="form-label">Phone Number</label>
                            <input name="phone_number" type="text" placeholder="Enter your phone number">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="locaction" class="form-label">Shop address</label>
                            <select>
                                <option value="HaNoi">Hai Duong</option>
                                <option value="LaoCai">Ha Noi</option>
                                <option value="LaoCai">Hai Phong</option>
                                <span class="form-message"></span>
                            </select>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="schedule-date" class="form-label">Schedule Date</label>
                            <input name="schedule-date" type="text" class="schedule">
                            <span class="form-message"></span>
                        </div>
                    </div>
                </div>
                <div class="service--book_btn first">
                    <button class="btn btn--primary"><h5>Continute</h5></button>
                </div>
            </div>
            <div class="contact--form__info second service--book slide--bottom">
                <div class="contact--form row">
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="pet-name" class="form-label">Pet Name</label>
                            <input name="pet-name" type="text" placeholder="Enter your first name">
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="type" class="form-label">Type Of Pet</label>
                            <select name="type">
                            <option value="">Type Of Pet</option>
                            <option value="male">Cat</option>
                            <option value="female">Dog</option>
                        </select>
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="abc" class="form-label">Gender</label>
                            <select name="abc">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                            <span class="form-message"></span>
                        </div>
                    </div>
                    <div class="contact--form__list l-6 m-6 c-12">
                        <div class="contact--form__list--wrapper">
                            <label for="birhday" class="form-label">Schedule Date</label>
                            <input name="birhday" type="text" class="schedule">
                            <span class="form-message"></span>
                        </div>
                    </div>
                </div>
                <div class="service--book_btn second">
                    <button class="btn btn--secondary"><h4>Come Back</h4></button>
                    <button class="btn btn--primary link"><h5>Continute</h5></button>
                </div>
            </div>
        </div>
    </section>
    `;

    const scheduleDateInput = main.querySelectorAll('.schedule');

    flatpickr(scheduleDateInput, {
        dateFormat: "Y-m-d",
    });

    // flatpickr(birthday, {
    //     dateFormat: "Y-m-d",
    // });


    main.querySelector('.service--book_btn.first .btn--primary').addEventListener('click', () => {
        handle_service_first_option(main);
    });
    main.querySelector('.service--book_btn.second .btn--secondary').addEventListener('click', () => {
        let contact_form_first = document.querySelector('.contact--form__info.first');
        let contact_form_second = document.querySelector('.contact--form__info.second')
        contact_form_first.classList.remove('slide--top');
        contact_form_second.classList.add('slide--bottom');
    });

    main.querySelector('.service--book_btn.second .link').addEventListener('click', () => {
        handle_service_second_option(main)
    });

    return main;
}

async function handle_service_first_option(main) {
    let check_first_name = main.querySelector('input[name="first-name"]');
    let check_last_name = main.querySelector('input[name="last-name"]');
    let check_email = main.querySelector('input[name="email"]');
    let check_phone_number = main.querySelector('input[name="phone_number"]');
    let check_schedule_date = main.querySelector('input[name="schedule-date"]')

    if (check_first_name.value === '') {
        alert('Please enter your first name');
        return false;
    }
    if (check_last_name.value === '') {
        alert('Please enter your last name');
        return false;
    }
    if (check_email.value === '') {
        alert('Please enter your email');
        return false;
    }
    if (check_phone_number.value === '') {
        alert('Please enter your phone number');
        return false;
    }
    if (check_schedule_date.value === '') {
        alert('Please select a schedule date');
        return false;
    }
    if (check_email.value !== '' && check_first_name.value !== '' && check_last_name.value !== '' && check_phone_number.value !== '' && check_schedule_date.value !== '') {
        let contact_form_first = document.querySelector('.contact--form__info.first');
        let contact_form_second = document.querySelector('.contact--form__info.second')
        contact_form_first.classList.add('slide--top');
        contact_form_second.classList.remove('slide--bottom');
    }
}

async function handle_service_second_option(main) {
    let pet_name = main.querySelector('input[name="pet-name"]');
    let birthday = main.querySelector('input[name="birthday"]');
    if (pet_name.value === '') {
        alert('Please enter your pet name');
        return false;
    }
    if (birthday.value === '') {
        alert("Please enter your Pet's Birhday");
        return false;
    }
    if (pet_name.value !== '' && birthday.value) {
        window.location.href = "service_book_success.html"
    }
}