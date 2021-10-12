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

const produtos = document.querySelectorAll('.produto')
const destaques = document.querySelector('.destaques')

produtos.forEach((produto, idx) => {
    if (produto.className !== 'produto') {
        destaques.children[idx].classList.add('selecionado')
    }
})

for(const [idx, produto] of produtos.entries()){

    produto.addEventListener('click', function(){
        const destaque = document.querySelector('.destaque.selecionado')

        destaque.classList.remove('selecionado')
        destaques.children[idx].classList.add('selecionado')
    })
}