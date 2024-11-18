function ocultarBotoes(escolhaDoJogador) {
    // pega as tags com classes buttons e button.
    const divBotoes = document.querySelector('.buttons');
    const botoes = document.querySelectorAll('.button');

    // remove as tags com classe buttons.
    divBotoes.remove();

    // chama a função gerarResultado passando a escolhaDoJogador.
    gerarResultado(escolhaDoJogador);
}

function gerarResultado(escolhaDoJogador) {
    // "escolhe" um valor aleatório entre pedra, papel ou tesoura.
    const escolhaDaCPU = ['pedra', 'papel', 'tesoura'][Math.floor(Math.random() * 3)];

    // chama a função criarImagem passando a escolhaDoJogador ou escolhaDaCPU.
    const imagemDoJogador = criarImagem(escolhaDoJogador);
    const imagemDaCPU = criarImagem(escolhaDaCPU);

    // chama a função criarDiv passando o texo e a imagemDoJogador ou a imagemDaCPU.
    const divJogador = criarDiv('Jogador', imagemDoJogador);
    const divCPU = criarDiv('Computador', imagemDaCPU);

    // cria uma tag span, adiciona a classe result e define divJogador e divCPU como tags filhas.
    const spanResultado = document.createElement('span');
    spanResultado.classList.add('result');
    spanResultado.appendChild(divJogador);
    spanResultado.appendChild(divCPU);

    // modifica a tag h1 conforme o resultado da partida.
    const tituloResultado = document.getElementsByTagName('h1');
    if (
        (escolhaDoJogador == 'pedra' && escolhaDaCPU == 'tesoura') ||
        (escolhaDoJogador == 'papel' && escolhaDaCPU == 'pedra') ||
        (escolhaDoJogador == 'tesoura' && escolhaDaCPU == 'papel')
    ) {
        tituloResultado[0].innerText = 'Você venceu!';
    } else if (escolhaDoJogador === escolhaDaCPU) {
        tituloResultado[0].innerText = 'Empatou!';
    } else {
        tituloResultado[0].innerText = 'Você perdeu!';
    }

    // pega as tags com classe container e adiciona o spanResultado como sua tag filha.
    const corpoPrincipal = document.querySelector('.container');
    corpoPrincipal.appendChild(spanResultado);
}

function criarImagem(escolha) {
    // cria uma tag img, define o src como o caminho da imagem escolhida (o nome da imagem tem que corresponder), define o alt como sendo a escolha, adiciona a classe img e retorna a imagem.
    const imagem = document.createElement('img');
    imagem.src = `img/${escolha}.png`;
    imagem.alt = escolha;
    imagem.classList.add('img');
    return imagem;
}

function criarDiv(texto, imagem) {
    // cria uma taga div e adiciona a classe result-img.
    const div = document.createElement('div');
    div.classList.add('result-img');

    // cria uma tag p e adiciona o texto a ela.
    const p = document.createElement('p');
    p.innerText = texto;

    // define as tags p e imagem como filhas da tag div.
    div.appendChild(p);
    div.appendChild(imagem);
    return div;
}

// chamado assim que a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    // "escolhe" uma das imagens disponíveis
    const imagemSelecionada = ["img/pedra.png", "img/papel.png", "img/tesoura.png"][Math.floor(Math.random() * 3)];

    // define o href do link do favicon como sendo o caminho da imagemSelecionada
    const favicon = document.getElementById("favicon-dinamico");
    favicon.href = imagemSelecionada;
});
