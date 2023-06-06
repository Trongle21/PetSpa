let data_service = [{
    id: 'service-1',
    name: 'Dog Walking'
}, {
    id: 'service-2',
    name: 'Grooming'
}, {
    id: 'service-3',
    name: 'Boarding'
}, {
    id: 'service-4',
    name: 'Pet Sitting'
}, ]

let dog_walking = {
    '30 minus': [{
            name: '10 Walk Pack',
            price: 285,
        },
        {
            name: '20 Walk Pack',
            price: 540,
        },
        {
            name: '50 Walk Pack',
            price: 1020,
        }
    ],
    '60 minus': [{
            name: '10 Walk Pack',
            price: 475,
        },
        {
            name: '20 Walk Pack',
            price: 900,
        },
        {
            name: '50 Walk Pack',
            price: 1700,
        }
    ]
}

let grooming = {
    'Luxury Bath': [{
            name: 'Bath & blow dry',
        },
        {
            name: 'Ear cleaning',
        },
        {
            name: 'Nail trim',
        },
        {
            name: 'Paw pad trim',
        },
        {
            name: 'Blueberry facial',
        },
    ],
    'Full Groom': [{
            name: 'Hair cut & style',
        },
        {
            name: 'Bath & blow dry',
        },
        {
            name: 'Ear cleaning',
        },
        {
            name: 'Nail trim',
        },
        {
            name: 'Paw pad trim',
        },
        {
            name: 'Sanitary trim',
        },
    ]
}

let boarding = {
    '30 minus': [{
            name: 'Bath & blow dry',
            price: 100,
            time: 'Night',
        },
        {
            name: 'Ear cleaning',
            price: 95,
            time: 'Night',
        },
        {
            name: 'Nail trim',
            price: 90,
            time: 'Night',
        }
    ]
}

let pet_sitting = {
    '30 minus': [{
            name: 'Bath & blow dry',
            price: 100,
            time: 'Night',
        },
        {
            name: 'Ear cleaning',
            price: 95,
            time: 'Night',
        },
        {
            name: 'Nail trim',
            price: 90,
            time: 'Night',
        }
    ]
}

async function service_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="service--section__page pc container--padding">
        <div class="container">
            <!-- PC -->
            <div class="service--section__page--warpper_pc row">
                <div class="service--section__page-list l-2 m-2">
                    <ul>
                    </ul>
                </div>
                <div class="service--section__page-info l-10 m-10">
                    <div class="service--blog scroll--sv-1 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2">
                                <img src="./src/image/service_1.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6>Pet Walking</h6>
                                    <a href="">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5>
                                    Monday - Friday / 9:00am - 7:00pm
                                </h5>
                                <p>
                                    Your Pet's well-being relies upon routine and consistency, which is why we assign them a designated Pet Care Specialist and regular pick-up window.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info cheap l-6 m-6">
                                        <div class="service--content__price">
                                            <h6>30 Minus</h6>
                                            <h6>$30</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                    <div class="service--content__info expensive l-6 m-6">
                                        <div class="service--content__price">
                                            <h6>60 Minus</h6>
                                            <h6>$50</h6>
                                        </div>
                                        <ul>
       
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-2 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2">
                                <img src="./src/image/service_2.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6>Grooming</h6>
                                    <a href="">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5>
                                    Monday - Sunday / 8:00am - 6:00pm
                                </h5>
                                <p>
                                    We offer a full range of spa and grooming services. All grooming options include a complete organic and hypoallergenic bath as well as detailed nose-to-tail attention. Pricing may vary due to size, the condition of the coat, matting, knots and the length
                                    of hair.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info luxury--bath l-6 m-6">
                                        <div class="service--content__price">
                                            <h6>The Luxury Bath</h6>
                                            <h6>$50</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                    <div class="service--content__info full--groom l-6 m-6">
                                        <div class="service--content__price">
                                            <h6>The Full Groom</h6>
                                            <h6>$120</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-3 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2">
                                <img src="./src/image/service_3.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6>Boarding</h6>
                                    <a href="">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                    <a href="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st">
                                        <button class="btn btn--primary">Book LIC</button>
                                    </a>
                                </div>
                                <h5>
                                    Monday - Sunday / 24 hours
                                </h5>
                                <p>
                                    Our overnight boarding service offers a convenient solution for our more active dogs. Each 24 hour stay includes daycare, relief walks, all feedings and daily photos. Live play cam is also available during daycare hours to check in when you'd like and
                                    see how your Pet is doing.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info boarding l-12 m-12">
                                        <div class="service--content__price">
                                            <h6>Boarding *</h6>
                                        </div>
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service--blog scroll--sv-4 service--padding">
                        <div class="service--wrapper row">
                            <div class="service--image l-2 m-2">
                                <img src="./src/image/service_4.webp" alt="">
                            </div>
                            <div class="service--des l-10 m-10">
                                <div class="service--title">
                                    <h6>Pet Sitting</h6>
                                    <a href="">
                                        <button class="btn btn--secondary">Book Now</button>
                                    </a>
                                </div>
                                <h5>
                                    Monday - Sunday / 8:00am - 6:00pm
                                </h5>
                                <p>
                                    For cats and puppies. Each 30-minute visit includes feeding/fresh water, litter/crate maintenance, and indoor playtime. Relief walks can be provided for puppies upon request.
                                </p>
                                <div class="service--content row">
                                    <div class="service--content__info pet--sitting l-12 m-12">
                                        <div class="service--content__price">
                                            <h6>Pet Sitting</h6>
                                        </div>
                                        <ul>
     
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Moblie -->
            <div class="service--section__page--warpper_mb">
                <div class="service--section__page-list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_1.webp" alt="">
                            <h6>Pet Walking</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Friday / 9:00am - 7:00pm
                                        </h5>
                                        <p>
                                            Your Pet's well-being relies upon routine and consistency, which is why we assign them a designated Pet Care Specialist and regular pick-up window.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>30 Minus</h6>
                                                    <h6>$30</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>10 Walk Pack</h6>
                                                        <h6>$285</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>20 Walk Pack</h6>
                                                        <h6>$540</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>50 Walk Pack</h6>
                                                        <h6>$1020</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>60 Minus</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>10 Walk Pack</h6>
                                                        <h6>$475</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>20 Walk Pack</h6>
                                                        <h6>$900</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>50 Walk Pack</h6>
                                                        <h6>$1700</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page-list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_2.webp" alt="">
                            <h6>Grooming</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 8:00am - 6:00pm
                                        </h5>
                                        <p>
                                            We offer a full range of spa and grooming services. All grooming options include a complete organic and hypoallergenic bath as well as detailed nose-to-tail attention. Pricing may vary due to size, the condition of the coat, matting, knots and the length
                                            of hair.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>The Luxury Bath</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Paw pad trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Blueberry facial</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>The Luxury Bath</h6>
                                                    <h6>$50</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Hair cut & style</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Paw pad trim</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Sanitary trim</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page-list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_3.webp" alt="">
                            <h6>Boarding</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                            <a href="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st">
                                                <button class="btn btn--primary">Book Boarding LIC</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 24 hours
                                        </h5>
                                        <p>
                                            Our overnight boarding service offers a convenient solution for our more active dogs. Each 24 hour stay includes daycare, relief walks, all feedings and daily photos. Live play cam is also available during daycare hours to check in when you'd like and
                                            see how your Pet is doing.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>Boarding *</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Bath & blow dry</h6>
                                                        <h6>$100 / Night</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Ear cleaning</h6>
                                                        <h6>$95 / Night</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Nail trim</h6>
                                                        <h6>$90 / Night</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service--section__page-list">
                    <div class="service--mb__title">
                        <div class="service--mb__image">
                            <img src="./src/image/service_4.webp" alt="">
                            <h6>Pet Sitting</h6>
                        </div>
                        <div class="service--mb__icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="service--mb__content">
                        <div class="service--section__page-info">
                            <div class="service--blog service--padding">
                                <div class="service--wrapper">
                                    <div class="service--des">
                                        <div class="service--title">
                                            <a href="">
                                                <button class="btn btn--secondary">Book Now</button>
                                            </a>
                                        </div>
                                        <h5>
                                            Monday - Sunday / 8:00am - 6:00pm
                                        </h5>
                                        <p>
                                            For cats and puppies. Each 30-minute visit includes feeding/fresh water, litter/crate maintenance, and indoor playtime. Relief walks can be provided for puppies upon request.
                                        </p>
                                        <div class="service--content">
                                            <div class="service--content__info">
                                                <div class="service--content__price">
                                                    <h6>Pet Sitting</h6>
                                                </div>
                                                <div class="service--content__detail">
                                                    <div class="service--content__detail--list">
                                                        <h6>Cat Visit</h6>
                                                        <h6>$40</h6>
                                                    </div>
                                                    <div class="service--content__detail--list">
                                                        <h6>Puppy Visit</h6>
                                                        <h6>$50</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    data_service.forEach((service) => {
        let service_section = main.querySelector('.service--section__page-list ul');
        let li = document.createElement('li');
        li.innerHTML = `
           ${service.name}
        `;
        li.setAttribute('id', service.id);
        service_section.appendChild(li);
    });

    // redenr service dog walking
    dog_walking['30 minus'].forEach(item => {
        let service = main.querySelector('.cheap ul')
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        `;
        service.appendChild(li)
    });

    dog_walking['60 minus'].forEach(item => {
        let service = main.querySelector('.expensive ul')
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        `;
        service.appendChild(li)
    });

    // redenr service grooming
    grooming['Luxury Bath'].forEach(item => {
        let service = main.querySelector('.luxury--bath ul')
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        `;
        service.appendChild(li)
    });
    grooming['Full Groom'].forEach(item => {
        let service = main.querySelector('.full--groom ul')
        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        `;
        service.appendChild(li)
    });

    // redenr service broading  
    boarding['30 minus'].forEach(item => {
        let service = main.querySelector('.boarding ul')
        let li = document.createElement('li');
        li.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price} / ${item.time}</p>
        `;
        service.appendChild(li)
    });

    // redenr service pet sitting  
    pet_sitting['30 minus'].forEach(item => {
        let service = main.querySelector('.pet--sitting ul')
        let li = document.createElement('li');
        li.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            `;
        service.appendChild(li)
    });

    return main;
}

export { service_page }