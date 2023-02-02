let menuBtn = document.querySelector('.header--btn');
let menu = document.querySelector('.header__menu');
    menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})