/**Show menu navbar */

document.querySelector('.header--bar').addEventListener('click', (e) => {
    document.querySelector('.header--nav-mb').classList.add('show--nav__bar');
    document.querySelector('.overlay').classList.add('show--overLay');
});

document.querySelector('.nav--mb_close').addEventListener('click', (e) => {
    document.querySelector('.header--nav-mb').classList.remove('show--nav__bar');
    document.querySelector('.overlay').classList.remove('show--overLay');
});

console.log(document.querySelector('.overlay'))