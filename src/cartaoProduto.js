import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto = `<div class='shadow-xl shadow-slate-400 rounded-lg w-[300px] m-2 flex flex-col p-2 justify-between group ${produtoCatalogo.categoria}' id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/${produtoCatalogo.nomeArquivoImagem}"
            alt="${produtoCatalogo.nome}" class="group-hover:scale-105 duration-300 my-3 rounded-lg"/>
        <p class="text-lg">${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
        </div:`;
    
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    function alerta(mensagem){
        const div = document.createElement("div");
        div.classList.add("message");
        div.innerText = mensagem;
        divMensagem.appendChild(div);
        setTimeout(() =>{
            div.style.display = "none";
        },2000);
    }

    for(const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => {alerta(mensagem)});
    }

    const divMensagem = document.querySelector(".alert");
    const mensagem = "Produto adicionado ao carrinho!";
}