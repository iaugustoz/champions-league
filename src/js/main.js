// Lógica para mostrar/ocultar o texto da seção "WELCOME"
const hiddenText = document.getElementById("text");
const buttonHiddenText = document.getElementById("btnHiddenText");

buttonHiddenText.addEventListener("click", function () {
    hiddenText.classList.toggle("hidden");
});

// Lógica para deixar o placar do último jogo dinâmico
function placarDinamico() {

    const scoreTeams = document.querySelectorAll('p.size-scoreboard');

    // Geração de números aleatórios entre 1 e 5
    const placar = [
        Math.floor(Math.random() * (6 - 1)) + 1,
        Math.floor(Math.random() * (6 - 1)) + 1
    ];

    // Iteração sobre os elementos que possuem a classe size-scoreboard
    for (let i = 0; i < scoreTeams.length; i++) {

        scoreTeams[i].innerHTML = `${placar[i]}`;
    }

}

placarDinamico();

// Lógica para deixar as datas dinâmicas
function dataAtualDecrescente() {

    // Objeto Date e elementos <p>
    const date = new Date();
    const textDate = document.querySelectorAll('p.date-card');

    // Dia, mês e ano (dados dinâmicos)
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Geração de números aleatórios entre 1 e 30
    const numbers = [
        Math.floor(Math.random() * (29 - 1)) + 1,
        Math.floor(Math.random() * (29 - 1)) + 1,
        Math.floor(Math.random() * (29 - 1)) + 1
    ];

    // Ordear os números em ordem decrescente
    numbers.sort((a, b) => b - a);

    // Iteração sobre os elementos que possuem a classe date-card
    for (let i = 0; i < textDate.length; i++) {

        // Define o conteúdo de cada elemento <p> com a data gerada e o mês/ano atual
        textDate[i].innerHTML = `${numbers[i]}/${month}/${year}`;
    }

}

dataAtualDecrescente();