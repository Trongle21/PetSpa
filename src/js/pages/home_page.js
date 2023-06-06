let home_service = [{
        name: 'Service',
        description: 'Vaccination are carried oit to keep pets in excellent condition',
        image: './src/image/service_Vaccination.png',
        href: 'service.html'
    }, {
        name: 'Product',
        description: 'Tidy up, full body wash to keep them stay clean',
        image: './src/image/service_teth\ cleaning.jpg',
        href: 'product.html'
    }, {
        name: 'About',
        description: 'General cart to keep your pet healthy as always',
        image: './src/image/service_bath\ tub.png',
        href: 'about.html'
    }, {
        name: 'Contact',
        description: 'Continuous control should be made for gum care',
        image: './src/image/service_veterinarian.png',
        href: 'contact.html'
    },

]


let home_package = [{
    name: 'Frendly Pack',
    price: 100,
    image: './src/image/service_price_1.webp',
    packages: [
        '5 Day service',
        'Dog Walking',
        'Grooming',
        'Boarding',
        'Pet Sitting'
    ]
}, {
    name: 'Recommend pack',
    price: 175,
    image: './src/image/service_price_2.webp',
    packages: [
        '15 Day service',
        'Dog Walking',
        'Grooming',
        'Boarding',
        'Pet Sitting'
    ]
}, {
    name: 'Premium  Pack',
    price: 200,
    image: './src/image/service_price_3.webp',
    packages: [
        '30 Day service',
        'Dog Walking',
        'Grooming',
        'Boarding',
        'Pet Sitting'
    ]
}, ]

let home_member = [{
    image: './src/image/staff_1.jpg',
    info: [{
        name: 'Ariana Grande',
        job: 'Veterinarian',
        social: [
            '<i class="fa-brands fa-square-facebook"></i>',
            '<i class="fa-brands fa-square-youtube"></i>',
            '<i class="fa-brands fa-square-instagram"></i>',
            '<i class="fa-brands fa-square-twitter"></i>'
        ]
    }]
}, {
    image: './src/image/staff_2.webp',
    info: [{
        name: 'The Weeknd',
        job: 'Doctor',
        social: [
            '<i class="fa-brands fa-square-facebook"></i>',
            '<i class="fa-brands fa-square-youtube"></i>',
            '<i class="fa-brands fa-square-instagram"></i>',
            '<i class="fa-brands fa-square-twitter"></i>'
        ]
    }]
}, {
    image: './src/image/staff_3.webp',
    info: [{
        name: 'Adele',
        job: 'Pet Bather',
        social: [
            '<i class="fa-brands fa-square-facebook"></i>',
            '<i class="fa-brands fa-square-youtube"></i>',
            '<i class="fa-brands fa-square-instagram"></i>',
            '<i class="fa-brands fa-square-twitter"></i>'
        ]
    }]
}, {
    image: './src/image/staff_4.webp',
    info: [{
        name: 'G-Dragon',
        job: 'Pet Trainingr',
        social: [
            '<i class="fa-brands fa-square-facebook"></i>',
            '<i class="fa-brands fa-square-youtube"></i>',
            '<i class="fa-brands fa-square-instagram"></i>',
            '<i class="fa-brands fa-square-twitter"></i>'
        ]
    }]
}, ]



async function home_page() {
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
                </div>
            </div>
        </section>

        <section class="service-prices--section container-padding">
            <div class="service-prices--section__img" style="background-image: url('./src/image/dog-bg_2.png')"></div>
            <div class="container">
                <h4 class="heading-lg text-center fw-800">Spencial Package</h4>
                <h2 class="heading-sm text-center margin-bottom">We offer spencial package just for you and your little family</h2>
                <div class="pricing--plan_list padding-bottom row">

                </div>

            </div>
        </section>
        <section class="team-member--section container-padding">
            <div class="team-member--section__img" style="background-image: url('')"></div>
            <div class="container">
                <h4 class="heading-lg text-center fw-800">Team Member</h4>
                <h2 class="heading-sm text-center margin-bottom">Our store's hard-working employees</h2>
                <div class="team-member--list padding-bottom row">

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

    function handle_data_home(home_service, home_package, home_member) {

        /** Service */
        home_service.forEach((e) => {
            let { name, description, image, href } = e;
            let div = document.createElement('div');
            div.classList.add('service--list');
            div.classList.add('l-3');
            div.classList.add('m-6');
            div.classList.add('c-12');
            div.innerHTML = `
                <a href='${href}' class="service--list__item  orange">
                    <div class="service--list__item--img box-sd-violet" style="background-image: url('${image}')">
                    </div>
                    <h3 class="fw-700">${name}</h3>
                    <p class="text-center margin-top ">${description}</p>
                </a>           
            `;
            main.querySelector('.service--section__list').appendChild(div);
        });

        /** Package */
        for (let [k, v] of Object.entries(home_package)) {
            let { name, price, image, packages } = v;
            let div = document.createElement('div');
            div.classList.add('plan--price', 'l-4', 'm-6', 'c-12');
            if (k == 1) {
                div.classList.add('scale')
            }
            div.innerHTML = `
                <div class="plan--price__image" style="background-image: url('${image}');">
                    <div class="plane--price__image-info">
                        <p>${name}</p>
                        <h3><span>$</span> ${price} <span>/Visit</span></h3>
                    </div>
                    <div class="plane--overlay"></div>
                </div>
                <div class="plane--price__info">
                    <ul>
                    </ul>
                </div>
                <a href="" class="plane--price__btn">
                    <button class="btn btn--primary">Buy Now</button>
                </a>
            `;
            for (let [k, v] of Object.entries(packages)) {
                let li = document.createElement('li');
                li.innerHTML = v;
                div.querySelector('.plane--price__info ul').appendChild(li)
            }
            main.querySelector('.pricing--plan_list').appendChild(div);
        }

        /** Member */

        for (let item of home_member) {
            let { image, info } = item;
            let div = document.createElement('div');
            div.classList.add('team-member--list__staff', 'l-3', 'm-6', 'c-12')
            div.innerHTML = `
                <div class="staff--img" style="background-image: url('${image}')">
                </div>
                <div class="team--member__info-wrapper">

                </div>         
            `;

            for (let [k, v] of Object.entries(info)) {
                let { name, job, social } = v;
                let div_info = document.createElement('div');
                div_info.classList.add('staf--info')
                div_info.innerHTML = `
                    <div class="staf--info__title">
                        <h5>${name}</h5>
                        <p>${job}</p>
                    </div>
                    <div class="staff--info__socail">

                    </div>             
                `;

                social.forEach((e) => {
                    let a = document.createElement('a');
                    a.setAttribute('href', '#');
                    a.innerHTML = e;
                    div_info.querySelector('.staff--info__socail').appendChild(a);
                })

                div.querySelector('.team--member__info-wrapper').appendChild(div_info);
            }

            main.querySelector('.team-member--list').appendChild(div);
        }

    }
    handle_data_home(home_service, home_package, home_member);
    return main;
}

export { home_page }