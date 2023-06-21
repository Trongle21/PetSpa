let footerInfoSp = [{
        name: 'Contact Us',
        url: 'contact.html'
    },
    {
        name: 'Service',
        url: 'service.html'
    },
    {
        name: 'Product',
        url: 'product.html'
    },
    {
        name: 'Signup',
        url: 'signup.html'
    },
];
let footerInfoAbout = [{
        name: 'About Us',
        url: 'about.html'
    },
    {
        name: 'Blog',
        url: 'https://pawpartner.com/throw-me-a-bone---525-w-52nd-st'
    },
    {
        name: 'Google',
        url: 'https://google.com.vn'
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com'
    },
]


let link_contact = [{
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: '<i class="fa-brands fa-square-facebook"></i>'
}, {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: '<i class="fa-brands fa-square-instagram"></i>'
}, {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: '<i class="fa-brands fa-square-twitter"></i>'
}, ]

export default function page_footer() {
    let footer = document.createElement('footer');
    footer.classList.add('page-footer--section')
    footer.innerHTML = `
    <div class="container">
        <div class="page--footer row">
            <div class="page--footer__info l-4 m-6 c-12">
                <div class="page--footer__info--wrapper">
                    <div class="page--footer__info--logo">
                        <div class="header--logo black">
                            <img src="./src/image/logo.png" alt="">
                            <h2>Pet<span>Spa</span></h2>
                        </div>
                    </div>
                    <div class="page--footer__info--policy">
                        <h6>© 2023 Petpall, Alright Reserved Team of Service | Privacy Polidy</h6>
                    </div>
                </div>
            </div>
            <div class="page--footer__link l-4 m-6 c-12">
                <div class="page--footer__link--wrapper row">
                    <nav class="page--footer__link--list l-4 m-4 c-4">
                        <h6 class=" fw-800">Support</h6>
                        <ul class="footerInfoSp">
                        </ul>
                    </nav>

                    <nav class="page--footer__link--list l-4 m-4 c-4">
                        <h6 class=" fw-800">About</h6>
                        <ul class="footerInfoAbout">
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="page--footer__contact l-4 m-6 c-12">
                <div class="page--footer__contact--wrapper">
                    <h6 class="fw-800">Get In Touch</h6>
                    <p>Have a question for us? We'll answer your problem here</p>
                    <div class="link--contact">

                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    footerInfoSp.map((list) => {
        let a = document.createElement('a');
        a.innerHTML = list.name;
        a.setAttribute('href', list.url);
        footer.querySelector('.footerInfoSp').appendChild(a);
    });
    footerInfoAbout.map((list) => {
        let a = document.createElement('a');
        a.innerHTML = list.name;
        a.setAttribute('href', list.url);
        footer.querySelector('.footerInfoAbout').appendChild(a);
    });

    link_contact.map((list) => {
        let a = document.createElement('a');
        a.innerHTML = list.icon
        a.setAttribute('href', `${list.url}`)
        footer.querySelector('.link--contact').appendChild(a);
    })

    return footer;
}