const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));
    for(const produto of produtosEscondidos){
        produto.classList.remove("hidden");
    }
}
function exibirDisney(){
    exibirTodos();
    const marvel = Array.from(catalogoProdutos.getElementsByClassName("marvel"));
    const TV = Array.from(catalogoProdutos.getElementsByClassName("TV"));

    for(const produto of marvel){
        produto.classList.add("hidden");
    }
    for(const produto of TV){
        produto.classList.add("hidden");
    }
}

function exibirMarvel(){
    exibirTodos();
    const disney = Array.from(catalogoProdutos.getElementsByClassName("disney"));
    const TV = Array.from(catalogoProdutos.getElementsByClassName("TV"));
 
    for(const produto of disney){
     produto.classList.add('hidden');
    }
    for(const produto of TV){
        produto.classList.add("hidden");
    }
 }

function exibirTV(){
    exibirTodos();
    const marvel = Array.from(catalogoProdutos.getElementsByClassName("marvel"));
    const disney = Array.from(catalogoProdutos.getElementsByClassName("disney"));
 
    for(const produto of disney){
     produto.classList.add('hidden');
    }
    for(const produto of marvel){
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros(){
    document.getElementById("exibir-todos").addEventListener('click', exibirTodos);
    document.getElementById("exibir-disney").addEventListener('click', exibirDisney);
    document.getElementById("exibir-marvel").addEventListener('click', exibirMarvel);
    document.getElementById("exibir-tv").addEventListener('click', exibirTV);
}