let headerList = [{
        name: 'Home',
        url: 'index.html'
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
        name: 'Blog',
        url: 'blog.html'
    },
    {
        name: 'Contact',
        url: 'contact.html'
    },
];

export default function headerPage() {
    const header = document.createElement('header');
    header.classList.add('header')
    header.innerHTML = `
    <div class="page--header container">
            <div class="header--bar">
                <i class="fa-sharp fa-solid fa-bars"></i>
            </div>
            <div class="header--logo">
                <img src="./src/image/logo.png" alt="">
                <h2>Pet<span>Spa</span></h2>
            </div>
        <!-- PC -->
        <nav class="header--nav">
            <ul class="header--nav__link pc">
            </ul>
        </nav>
        <div class="header--sign-in">
            <a href="">
                <button class="btn btn--primary">Sign in</button>
            </a>
        </div>
        <div class="overlay"></div>
        <!-- Moblie -->
        <nav class="header--nav-mb">
            <div class="nav--mb_close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <ul class="header--nav-mb__link moblie">
                
            </ul>
        </nav>
    </div>
    `;
    /** PC */
    headerList.map((list) => {
        let li = document.createElement('li');
        li.classList.add('header--nav__link--item')
        li.innerHTML = `
            <a href='${list.url}'>${list.name}</a>
        `;
        header.querySelector('.pc').appendChild(li)
    })

    /** Moblie */
    headerList.map((list) => {
        let li = document.createElement('li');
        li.classList.add('header--nav-mb__link--item')
        li.innerHTML = `
            <a href='${list.url}'>${list.name}</a>
        `;
        header.querySelector('.moblie').appendChild(li)
    })
    return header;
}