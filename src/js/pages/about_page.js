let principles = [{
    name: 'Excellence',
    description: 'Be the best while doing our best, both in our personal lives and as a company'
}, {
    name: 'Integrity',
    description: 'The foundation of trust and the fabric of all meaningful relationships – not only with our clients and the pets who rely on us, but also with our team, who we rely on every day'
}, {
    name: 'Passion',
    description: 'For what we do, and the pets we do it for – otherwise why do it?'
}, {
    name: 'Hospitality',
    description: 'How we welcome others into our family – with open arms, courtesy, kindness and a sense of belonging'
}, ]

async function about_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="about--hero container--padding">
        <div class="about--hero__image" style="background-image: url('./src/image/about_hero_1.jpg');">
        </div>
    </section>
    <section class="about--section container--padding">
        <div class="container">
            <div class="about--section__wrapper">
                <div class="about--section__history row">
                    <div class="about--section__history--info l-4 m-12 c-12">
                        <h3 class="about--title">Our Story</h3>
                        <h6>In 2008, founders Mike and Adam—fresh off Wall Street—launched Throw Me A Bone with the idea of creating a more personalized, convenient and accessible pet-care service in New York City. What began as a small but thriving dog-walking
                            business on the Upper East Side quickly became a 10-person operation within two years. By 2011, Throw Me A Bone expanded beyond dog walking to offer pet sitting (for cats, too!), grooming and dog training, providing in-home
                            services across much of Manhattan. In 2017, we opened our first full-service pet care facility in Midtown West complete with a pet spa, playroom, and dog run. Today, we’re operating 7 facility locations with a team of over
                            35 dedicated Pet Care Specialists who provide over 200 services a day across Manhattan, Brooklyn, and Queens. High quality, comprehensive pet care has never been more accessible, and we're proud to be a leader in enhancing
                            the lives of New York City's pets.</h6>
                    </div>
                    <div class="about--section__picture l-7 m-12 c-12">
                        <div class="about--image" style="background-image: url('/src/image/about_ceo.jpg');">
                        </div>
                    </div>
                </div>
                <div class="about--section__misstion">
                    <div class="about--section__misstion--info text-center">
                        <h3 class="about--title">Our Mission</h3>
                        <h6>To enrich the lives of each and every pet in our care while delivering value, convenience, and peace of mind to their owners.</h6>
                    </div>
                </div>
                <div class="about--section__principles row">
                    <div class="about--section__picture l-7 m-12 c-12">
                        <div class="about--image" style="background-image: url('/src/image/about_2.jpg');">
                        </div>
                    </div>
                    <div class="about--section__principles--info l-4 m-12 c-12">
                        <h3 class="about--title">Our Guiding Principles</h3>
                        <div class="principles-list">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    principles.forEach((e) => {
        let { name, description } = e;
        let div = document.createElement('div');
        div.classList.add('principles-list__name')
        div.innerHTML = `
            <h4>${name}</h4>
            <h6>${description}</h6>
        `;
        main.querySelector('.principles-list').appendChild(div)
    });

    return main;
}

export { about_page }