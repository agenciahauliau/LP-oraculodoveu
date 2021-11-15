"use strict";

function efeitoScroll() {
  const MenuItens = document.querySelectorAll(".menu ul li");
  const sectionOne = document.querySelector(".section1");
  const Menu = document.querySelector(".menu");

  MenuItens.forEach((item, idx) => {
    if (
      sectionOne.getBoundingClientRect().bottom >
      item.getBoundingClientRect().bottom
    ) {
      item.classList.add("branco");
      item.classList.remove("preto");
    } else {
      item.classList.add("preto");
      item.classList.remove("branco");
    }
  });

  if (sectionOne.getBoundingClientRect().bottom < 0) {
    Menu.classList.add("menuDesktop");
  } else {
    Menu.classList.remove("menuDesktop");
  }
}

efeitoScroll();

window.addEventListener("resize", function () {
  efeitoScroll();
});

window.addEventListener("scroll", function () {
  efeitoScroll();
});

const enviarMensagem = document.querySelector(".form button");

enviarMensagem.addEventListener("click", function () {
  const nomeContato = document.querySelector('.form input[name="nome"]').value;
  const textoContato = document.querySelector(
    '.form textarea[name="mensagem"]'
  ).value;

  if (nomeContato && textoContato) {
    !window.open(
      `https://api.whatsapp.com/send?phone=+556281483910&text=Oi! meu nome é ${nomeContato}. ${textoContato}`
    );
  }
});

const produtos = document.querySelectorAll(".produto");
const destaques = document.querySelector(".destaques");

produtos.forEach((produto, idx) => {
  if (produto.className !== "produto") {
    destaques.children[idx].classList.add("selecionado");
  }
});

for (const [idx, produto] of produtos.entries()) {
  produto.addEventListener("click", function () {
    const destaque = document.querySelector(".destaque.selecionado");
    const produtoSelecionado = document.querySelector(".produto.selecionado");

    produtoSelecionado.classList.remove("selecionado");
    produto.classList.add("selecionado");

    destaque.classList.remove("selecionado");
    destaques.children[idx].classList.add("selecionado");
  });
}

const slideItens = document.querySelectorAll(".slide .itens");

for (let slideItem of slideItens) {
  slideItem.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="seta-esq">
        <svg viewBox="0 0 24 24">
            <path d="M14.414 5.586c-.78-.781-2.048-.781-2.828 0l-6.415 6.414 6.415 6.414c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-3.585-3.586 3.585-3.586c.781-.781.781-2.047 0-2.828z"/>
        </svg>
    </div>
    `
  );

  slideItem.insertAdjacentHTML(
    "afterend",
    `
    <div class="seta-dir">
        <svg viewBox="0 0 24 24">
            <path d="M8.586 5.586c-.781.781-.781 2.047 0 2.828l3.585 3.586-3.585 3.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l6.415-6.414-6.415-6.414c-.78-.781-2.048-.781-2.828 0z"/>
        </svg>
    </div>
    `
  );

  slideItem.previousElementSibling.addEventListener("click", function () {
    for (let imagem of this.nextElementSibling.children) {
      if (imagem.classList.contains("ativo")) {
        imagem.classList.remove("ativo")
        if (imagem.previousElementSibling) {
          imagem.previousElementSibling.classList.add("ativo")
        } else {
          this.nextElementSibling.lastElementChild.classList.add("ativo")
        }
        break
      }
    }
  })
  slideItem.nextElementSibling.addEventListener("click", function () {
    for (let imagem of this.previousElementSibling.children) {
      if (imagem.classList.contains("ativo")) {
        imagem.classList.remove("ativo")
        if (imagem.nextElementSibling) {
          imagem.nextElementSibling.classList.add("ativo")
        } else {
          this.previousElementSibling.firstElementChild.classList.add("ativo")
        }
        break
      }
    }
  })
}
