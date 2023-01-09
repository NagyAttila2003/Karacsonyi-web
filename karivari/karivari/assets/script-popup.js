const body = document.querySelector('body');
const headmenu = document.querySelector(".head-menu");
const headcart = document.querySelector(".head-cart");
const menu = document.querySelector(".menu");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");

headmenu.onclick = function(){
    body.classList.toggle('active');
    headmenu.classList.toggle('active');
    menu.classList.toggle('active');
}

headcart.onclick = function(){
    body.classList.toggle('active');
    headcart.classList.toggle('active');
    cart.classList.toggle('active');
    overlay.classList.toggle('active');
}

overlay.onclick = function(){
    body.classList.toggle('active');
    headcart.classList.toggle('active');
    cart.classList.toggle('active');
    overlay.classList.toggle('active');
}