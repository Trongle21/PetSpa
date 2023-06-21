async function signup_page() {
    let main = document.createElement('main');
    main.innerHTML = `
    <section class="section--signup">
        <div class="container">
            <div class="section--signup__wrapper row">
                <div class="signup--form l-6 m-6 c-12">
                    <div class="signup--form__wrapper">
                        <div class="header--logo">
                            <a href="index.html">
                                <img src="./src/image/logo.png" alt="">
                            </a>
                        </div>
                        <h2>Get Started</h2>
                        <h3>Create your account now</h3>

                        <div class="sign--up__form">
                            <label for="email" class="form-label">Email</label>
                            <input name="email" type="text" placeholder="Enter your email">
                            <span class="form-message"></span>
                        </div>
                        <div class="sign--up__form">
                            <label for="password" class="form-label">Password</label>
                            <input name="password" type="password" placeholder="Enter your password">
                            <span class="form-message"></span>
                        </div>
                        <div class="sign--up__form">
                            <label for="password" class="form-label">Confirm Password</label>
                            <input name="password" type="password" placeholder="Enter your password">
                            <span class="form-message"></span>
                        </div>
                        <div class="sign--up__form--button">
                            <button class="btn btn--signup">SignUp</button>
                        </div>
                        <div class="sign--up__form--login">
                            <h5>Have an account</h5>
                            <p>Login</p>
                        </div>
                    </div>
                </div>

                <div class="signup--decorate l-6 m-6">
                    <div class="signup--image" style="background-image:url('./src/image/signup_1.jpeg')"></div>
                </div>
            </div>
        </div>
    </section>
    <div class="main--account">
        <div class="main--account__signin">
            <div class="main--account_sigin--warapper l-4 m-6 c-8">
                <div class="main--account__form-group">
                    <label for="email" class="form-label">Email</label>
                    <input name="email" type="text" placeholder="Enter your email">
                    <span class="form-message"></span>
                </div>
                <div class="main--account__form-group">
                    <label for="password" class="form-label">Password</label>
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
                        <button class="btn btn--signin">Sign In</button>
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
    </div>
    <div class="overlay"></div>
    `;
    return main;
}

export { signup_page }