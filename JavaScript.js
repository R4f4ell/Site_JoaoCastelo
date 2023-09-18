// No seu arquivo java.js
// Crie um array para armazenar todas as reclamações
const reclamacoes = [];

// Função para adicionar uma reclamação à lista
function adicionarReclamacao(reclamacao, bairro, rua) {
    const novaReclamacao = { reclamacao, bairro, rua };
    reclamacoes.push(novaReclamacao);
}

// Função para exibir todas as reclamações
function exibirReclamacoes() {
    const listaReclamacoes = document.getElementById("listaReclamacoes");
    listaReclamacoes.innerHTML = "";

    reclamacoes.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Reclamação:</strong> ${item.reclamacao}<br><strong>Bairro:</strong> ${item.bairro}<br><strong>Rua:</strong> ${item.rua}`;
        listaReclamacoes.appendChild(listItem);
    });
}

// No seu arquivo java.js
// Seletor do formulário
const form = document.getElementById("reclamacaoForm");

// Seletor da lista de reclamações
const listaReclamacoes = document.getElementById("listaReclamacoes");

// Manipulador de envio do formulário
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturar os valores dos campos
    const reclamacao = document.getElementById("reclamacao").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;

    // Chamar a função para adicionar reclamação ao array
    adicionarReclamacao(reclamacao, bairro, rua);

    // Chamar a função para exibir todas as reclamações
    exibirReclamacoes();

    // Limpar os campos após o envio
    document.getElementById("reclamacao").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("rua").value = "";
});

// No seu arquivo java.js

// Função para filtrar reclamações por bairro na barra de navegação
function filtrarReclamacoesNav() {
    const filtroBairroNav = document.getElementById("filtroBairroNav").value.toLowerCase();
    const reclamacoesFiltradas = reclamacoes.filter((item) =>
        item.bairro.toLowerCase().includes(filtroBairroNav)
    );

    const listaReclamacoes = document.getElementById("listaReclamacoes");
    listaReclamacoes.innerHTML = "";

    reclamacoesFiltradas.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Reclamação:</strong> ${item.reclamacao}<br><strong>Bairro:</strong> ${item.bairro}<br><strong>Rua:</strong> ${item.rua}`;
        listaReclamacoes.appendChild(listItem);
    });
}

// Adicionar o evento de pesquisa na barra de navegação quando o usuário pressionar Enter
document.getElementById("filtroBairroNav").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        filtrarReclamacoesNav();
    }
});

// Exemplo de adição de reclamações (você pode adicionar mais)
adicionarReclamacao("Reclamação 1", "Bairro A", "Rua 1");
adicionarReclamacao("Reclamação 2", "Bairro B", "Rua 2");
adicionarReclamacao("Reclamação 3", "Bairro A", "Rua 3");

// Exibir todas as reclamações ao carregar a página
exibirReclamacoes();
