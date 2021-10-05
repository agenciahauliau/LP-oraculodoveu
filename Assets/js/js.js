"use strict";

function efeitoScroll() {
    const MenuItens = document.querySelectorAll('.menu ul li')
    const sectionOne = document.querySelector('.section1')

    MenuItens.forEach((item, idx) => {
        if(sectionOne.getBoundingClientRect().bottom > item.getBoundingClientRect().bottom){
            item.classList.add('branco')
            item.classList.remove('preto')
        } else {
            item.classList.add('preto')
            item.classList.remove('branco')
        }
    });
};

efeitoScroll()

window.addEventListener('resize', function () {
    efeitoScroll()
});

window.addEventListener('scroll', function () {
    efeitoScroll()
});

