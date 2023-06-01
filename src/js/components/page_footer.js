let footerInfoSp = [{
        name: 'Contact Us',
        url: '#'
    },
    {
        name: 'Online Chat',
        url: '#'
    },
    {
        name: 'Whatsapp',
        url: '#'
    },
    {
        name: 'Facebook',
        url: '#'
    },
];
let footerInfoAbout = [{
        name: 'About Us',
        url: '#'
    },
    {
        name: 'Blog',
        url: '#'
    },
    {
        name: 'Jobs',
        url: '#'
    },
    {
        name: 'Careers',
        url: '#'
    },
]

export default function page_footer() {
    let footer = document.createElement('footer');
    footer.classList.add('page-footer--section')
    footer.innerHTML = `
    <div class="container">
        <div class="page--footer row">
            <div class="page--footer__info l-4 m-6 c-6">
                <div class="page--footer__info--wrapper">
                    <div class="page--footer__info--logo">
                        <div class="header--logo">
                            <img src="./src/image/logo.png" alt="">
                            <h2>Pet<span>Spa</span></h2>
                        </div>
                    </div>
                    <div class="page--footer__info--policy">
                        <h6>© 2023 Petpall, Alright Reserved Team of Service | Privacy Polidy</h6>
                    </div>
                </div>
            </div>
            <div class="page--footer__link l-4 m-6 c-6">
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
            <div class="page--footer__contact l-4 m-6 c-6">
                <div class="page--footer__contact--wrapper">
                    <h6 class="fw-800">Get In Touch</h6>
                    <p>Have a question for us? We'll answer your problem here</p>
                    <div class="link--contact">
                        <a href="">
                            <i class="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-square-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    footerInfoSp.map((list) => {
        let li = document.createElement('li');
        li.innerHTML = list.name;
        li.setAttribute('href', list.url)
        footer.querySelector('.footerInfoSp').appendChild(li)
    });
    footerInfoAbout.map((list) => {
        let li = document.createElement('li');
        li.innerHTML = list.name;
        li.setAttribute('href', list.url)
        footer.querySelector('.footerInfoAbout').appendChild(li)
    })

    return footer;
}