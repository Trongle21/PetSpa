/** Header and Footer */

$(function() {
    // Tải phần header và chèn vào vị trí cần thiết trong trang web
    $.get("header.html", function(data) {
        $("#headerContainer").html(data);
    });

    // Tải phần footer và chèn vào vị trí cần thiết trong trang web
    $.get("footer.html", function(data) {
        $("#footerContainer").html(data);
    });
});


/**Show menu navbar */

document.querySelector('.header--bar').addEventListener('click', (e) => {
    document.querySelector('.header--nav-mb').classList.add('show--nav__bar');
    document.querySelector('.overlay').classList.add('show--overLay');
});

document.querySelector('.nav--mb_close').addEventListener('click', (e) => {
    document.querySelector('.header--nav-mb').classList.remove('show--nav__bar');
    document.querySelector('.overlay').classList.remove('show--overLay');
});

/**Show Cart */
const productCart = document.querySelector('.product--cart')
console.log(productCart)
document.querySelectorAll('.product--item__btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        productCart.classList.add('show--cart')
    })
})

document.querySelector('.product--cart__info--close').addEventListener('click', (e) => {
    productCart.classList.remove('show--cart');
});