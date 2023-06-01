var currentURL = window.location.href;

export default function home_page() {
    if (currentURL === 'http://127.0.0.1:5500/index.html') {
        let main = document.createElement('main')
        main.innerHTML = `
        <section class="hero--section container-padding">
            <div class="hero--content row container padding-bottom ">
                <div class="hero--content__info l-6 m-12 c-12  ">
                    <h1>Your Pet is Part of Our Family</h1>
                    <p class="margin-bottom">Let us treat your pet like our own family with best service and special package</p>
                    <div class="hero--content__button">
                        <a href="">
                            <button class="btn btn--primary">Book a Schedule</button>
                        </a>
                        <a href="">
                            <button class="btn btn--secondary">Pricing Pack</button>
                        </a>
                    </div>
                </div>
                <div class="hero--content__img l-6 m-12 c-12" style="background-image: url('./src/image/backgroung.webp');"></div>
            </div>
        </section>

        <section class="service--section container-padding">
            <div class="service--section__img" style="background-image: url('./src/image/cat-bg.png')"></div>
            <div class="container">
                <h4 class="heading-lg text-center fw-800">What Can We Do</h4>
                <h2 class="heading-sm text-center margin-bottom">We lock after little your family, we ensure that we will give the best treat for your little family</h2>
                <div class="service--section__list padding-bottom row">
                    <div class="service--list  l-3 m-6 c-12">
                        <a class="service--list__item  violet">
                            <div class="service--list__item--img box-sd-violet" style="background-image: url('./src/image/service_Vaccination.png')">
                            </div>
                            <h3 class="fw-700">Service</h3>
                            <p class="text-center margin-top ">Vaccination are carried oit to keep pets in excellent condition</p>
                        </a>
                    </div>
                    <div class="service--list l-3 m-6 c-12">
                        <a href="./grooming.html" class="service--list__item orange">
                            <div class="service--list__item--img box-sd-orange" style="background-image: url('./src/image/service_teth\ cleaning.jpg')">
                            </div>
                            <h3 class="fw-700">Product</h3>
                            <p class="text-center margin-top ">Tidy up, full body wash to keep them stay clean</p>
                        </a>
                    </div>
                    <div class="service--list l-3 m-6 c-12">
                        <a class="service--list__item violet">
                            <div class="service--list__item--img box-sd-violet" style="background-image: url('./src/image/service_bath\ tub.png')">
                            </div>
                            <h3 class="fw-700">History</h3>
                            <p class="text-center margin-top ">General cart to keep your pet healthy as always</p>
                        </a>
                    </div>
                    <div class="service--list l-3 m-6 c-12">
                        <a href="./product.html" class="service--list__item orange">
                            <div class="service--list__item--img box-sd-orange " style="background-image: url('./src/image/service_veterinarian.png')">
                            </div>
                            <h3 class="fw-700">Contact</h3>
                            <p class="text-center margin-top ">Continuous control should be made for gum care</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-prices--section container-padding">
            <div class="service-prices--section__img" style="background-image: url('./src/image/dog-bg_2.png')"></div>
            <div class="container">
                <h4 class="heading-lg text-center fw-800">Spencial Package</h4>
                <h2 class="heading-sm text-center margin-bottom">We offer spencial package just for you and your little family</h2>
                <div class="pricing--plan_list padding-bottom row">
                    <div class="plan--price l-4 m-6 c-12">
                        <div class="plan--price__image" style="background-image: url('./src/image/service_price_1.webp');">
                            <div class="plane--price__image-info">
                                <p>Frendly Pack</p>
                                <h3><span>$</span> 100 <span>/Visit</span></h3>
                            </div>
                        </div>
                        <div class="plane--price__info">
                            <ul>
                                <li>5 Day service</li>
                                <li>Dog Walking</li>
                                <li>Grooming</li>
                                <li>Boarding</li>
                                <li>Pet Sitting</li>
                            </ul>
                        </div>
                        <a href="" class="plane--price__btn">
                            <button class="btn btn--primary">Buy Now</button>
                        </a>
                    </div>
                    <div class="plan--price l-4 m-6 c-12">
                        <div class="plan--price__image" style="background-image: url('./src/image/service_price_2.webp');">
                            <div class="plane--price__image-info">
                                <p>Frendly Pack</p>
                                <h3><span>$</span> 175 <span>/Visit</span></h3>
                            </div>
                        </div>
                        <div class="plane--price__info">
                            <ul>
                                <li>15 Day service</li>
                                <li>Dog Walking</li>
                                <li>Grooming</li>
                                <li>Boarding</li>
                                <li>Pet Sitting</li>
                            </ul>
                        </div>
                        <a href="" class="plane--price__btn">
                            <button class="btn btn--primary">Buy Now</button>
                        </a>
                    </div>
                    <div class="plan--price l-4 m-6 c-12">
                        <div class="plan--price__image" style="background-image: url('./src/image/service_price_3.webp');">
                            <div class="plane--price__image-info">
                                <p>Frendly Pack</p>
                                <h3><span>$</span> 200 <span>/Visit</span></h3>
                            </div>
                        </div>
                        <div class="plane--price__info">
                            <ul>
                                <li>30 Day service</li>
                                <li>Dog Walking</li>
                                <li>Grooming</li>
                                <li>Boarding</li>
                                <li>Pet Sitting</li>
                            </ul>
                        </div>
                        <a href="" class="plane--price__btn">
                            <button class="btn btn--primary">Buy Now</button>
                        </a>
                    </div>
                </div>

            </div>
        </section>
        <section class="team-member--section container-padding">
            <div class="team-member--section__img" style="background-image: url('')"></div>
            <div class="container">
                <h4 class="heading-lg text-center fw-800">Team Member</h4>
                <h2 class="heading-sm text-center margin-bottom">Our store's hard-working employees</h2>
                <div class="team-member--list padding-bottom row">
                    <div class="team-member--list__staff l-3 m-6 c-12">
                        <div class="staff--img" style="background-image: url('./src/image/staff_1.jpg')">

                        </div>
                        <div class="team--member__info-wrapper">
                            <div class="staf--info">
                                <div class="staf--info__title">
                                    <h5>Ariana Grande</h5>
                                    <p>Veterinarian</p>
                                </div>
                                <div class="staff--info__socail">
                                    <a href="#">
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-member--list__staff l-3 m-6 c-12">
                        <div class="staff--img" style="background-image: url('./src/image/staff_2.webp">

                        </div>
                        <div class="team--member__info-wrapper">
                            <div class="staf--info">
                                <div class="staf--info__title">
                                    <h5>The Weeknd</h5>
                                    <p>Doctor</p>
                                </div>
                                <div class="staff--info__socail">
                                    <a href="#">
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-member--list__staff l-3 m-6 c-12">
                        <div class="staff--img" style="background-image: url('./src/image/staff_3.webp')">

                        </div>
                        <div class="team--member__info-wrapper">
                            <div class="staf--info">
                                <div class="staf--info__title">
                                    <h5>Adele</h5>
                                    <p>Pet Bather</p>
                                </div>
                                <div class="staff--info__socail">
                                    <a href="#">
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-member--list__staff l-3 m-6 c-12">
                        <div class="staff--img" style="background-image: url('./src/image/staff_4.webp')">

                        </div>
                        <div class="team--member__info-wrapper">
                            <div class="staf--info">
                                <div class="staf--info__title">
                                    <h5>Chris Martin</h5>
                                    <p>Pet Training</p>
                                </div>
                                <div class="staff--info__socail">
                                    <a href="#">
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gift--section container-padding">
            <div class="gift--section__img" style="background-image: url('')"></div>
            <div class="container padding-bottom">
                <h4 class="heading-lg text-center fw-800">Spencial Gift</h4>
                <h2 class="heading-sm text-center margin-bottom">Our store's hard-working employees</h2>
                <div class="gift--section__wrapper row">
                    <div class="gift--section__wrapper--info l-6 m-6">
                        <h1>Get Spencial Gift!</h1>
                        <p>Contact our customer services and get your spencial gift for the first package purchase</p>
                        <a href="">
                            <button class="btn btn--primary">Contact Us</button>
                        </a>
                    </div>
                    <div class="gift--section__wrapper--image l-6 m-6" style="background-image: url('./src/image/gift_1.png');">
                    </div>

                </div>
            </div>
        </section>
        `;
        return main;
    }
}