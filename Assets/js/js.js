"use strict";

function efeitoScroll() {
    const MenuItens = document.querySelectorAll('.menu ul li')
    const sectionOne = document.querySelector('.section1')
    const Menu = document.querySelector('.menu')

    MenuItens.forEach((item, idx) => {
        if (sectionOne.getBoundingClientRect().bottom > item.getBoundingClientRect().bottom) {
            item.classList.add('branco')
            item.classList.remove('preto')
        } else {
            item.classList.add('preto')
            item.classList.remove('branco')
        }
    });

    if (sectionOne.getBoundingClientRect().bottom < 0) {
        Menu.classList.add('menuDesktop')
    } else {
        Menu.classList.remove('menuDesktop')
    }

};

//////////// Ações

efeitoScroll()

window.addEventListener('resize', function () {
    efeitoScroll()
});

window.addEventListener('scroll', function () {
    efeitoScroll()
});

const enviarMensagem = document.querySelector('.form button')

enviarMensagem.addEventListener('click', function () {
    const nomeContato = document.querySelector('.form input[name="nome"]').value
    const textoContato = document.querySelector('.form textarea[name="mensagem"]').value
    
    if (nomeContato && textoContato) {        
        !window.open(`https://api.whatsapp.com/send?phone=+556281483910&text=Oi! meu nome é ${nomeContato}. ${textoContato}`)
    }
})

