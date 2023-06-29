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
        name: 'About',
        url: 'about.html'
    },
    {
        name: 'Contact',
        url: 'contact.html'
    },
];

export default function page_header() {
    const header = document.createElement('header');
    header.classList.add('header')
    header.innerHTML = `
    <div class="page--header">
        <div class="header--bar">
            <i class="fa-sharp fa-solid fa-bars"></i>
        </div>
        <a href="index.html" class="header--logo">
            <img src="./src/image/logo.png" alt="">
            <h2>Pet<span>Spa</span></h2>
        </a>
        <div class="overlay"></div>
        <!-- PC -->
        <nav class="header--nav">
            <ul class="header--nav__link pc">
            </ul>
        </nav>
        <div class="header--sign-in">
            <button class="btn btn--primary">Sign in</button>
        </div>
    
        <div  class="main--account__icon">
            <i class="fa-solid fa-user"></i>
        </div>
        <!-- Moblie $ Tablet-->
        <nav class="header--nav-mb">
            <div class="nav--mb_close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <ul class="header--nav-mb__link moblie">
            </ul>
        </nav>
    </div>
    <div class="main--account">
        <div class="main--account__signin">
            <div class="main--account_sigin--warapper l-4 m-6 c-8">
            <div class="main--account__form-group">
                <lable for="email" class="form-lable">Email</lable>
                <input name="email" type="text" placeholder="Enter your email">
                <span class="form-message"></span>
            </div>
            <div class="main--account__form-group">
                <lable for="password" class="form-lable">Password</lable>
                <input name="password" type="password" placeholder="Enter your password">
                <span class="form-message"></span>
            </div>
            <div class="main--account__check">
                <div class="main--account__check--input">
                    <input id="checkRemember" type="checkbox">
                    <label for="checkRemember">Remember me</label>
                </div>
                <a href="">
                Forgot password
                </a>
            </div>
            <div class="main--account__submit">
                <a href="">
                    <button type="submit" id="saveData" name="sign_up" value="sign up" class="btn btn--signin">Sign In</button>
                </a>
            </div>
            <div class="main--account_signup">
                <h5>Don't have a account?</h5>
                <a href="signup.html">
                    Sign up
                </a>
            </div>
        </div>
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

    // Lấy phần tử header
    const page_header = header.querySelector('.page--header')

    function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            page_header.classList.add('bg');
        } else {
            page_header.classList.remove('bg');
        }
    }

    window.addEventListener('scroll', handleScroll);


    return header;
}