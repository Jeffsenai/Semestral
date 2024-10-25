const pares = [
    { texto: 'Árvore', imagem: 'imagens/cachorro.jpeg' },
    { texto: 'Casa', imagem: 'imagens/casa.png' },
    { texto: 'Cachorro', imagem: 'imagens/cachorro.jpeg' }, // Caminho atualizado
    { texto: 'Gato', imagem: 'imagens/gato.png' },
    { texto: 'Mesa', imagem: 'imagens/mesa.png' },
    { texto: 'Carro', imagem: 'imagens/carro.png' },
    { texto: 'Sorriso', imagem: 'imagens/sorriso.png' },
    { texto: 'Livro', imagem: 'imagens/livro.png' },
];


let cartas = [];
pares.forEach(par => {
    cartas.push({ tipo: 'palavra', texto: par.texto });
    cartas.push({ tipo: 'imagem', imagem: par.imagem });
});

let cartasSelecionadas = [];
let cartasSelecionadasId = [];
let paresEncontrados = 0;
let temporizador;
let tempo = 0;

const tabuleiroJogo = document.getElementById('tabuleiroJogo');
const mensagemDisplay = document.getElementById('mensagem');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const temporizadorDisplay = document.getElementById('temporizador');

function criarCartas() {
    cartas.sort(() => 0.5 - Math.random()); // Embaralhar as cartas
    cartas.forEach((item, index) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.setAttribute('data-id', index);
        carta.innerHTML = `
            <div class="frente">${item.tipo === 'palavra' ? item.texto : ''}</div>
            <div class="verso"><img src="${item.tipo === 'imagem' ? item.imagem : ''}" alt="${item.tipo === 'palavra' ? item.texto : ''}" width="100" height="100"></div>
        `;
        carta.addEventListener('click', virarCarta);
        tabuleiroJogo.appendChild(carta);
    });
}

function virarCarta() {
    const cartaId = this.getAttribute('data-id');
    cartasSelecionadas.push(cartas[cartaId]);
    cartasSelecionadasId.push(cartaId);
    this.classList.add('flipped');

    // Mostrar o verso da carta
    const verso = this.querySelector('.verso');
    verso.style.display = 'flex';

    if (cartasSelecionadas.length === 2) {
        setTimeout(verificarPares, 1000);
    }
}

function verificarPares() {
    const [primeiraCartaId, segundaCartaId] = cartasSelecionadasId;
    const primeiraCarta = cartasSelecionadas[0];
    const segundaCarta = cartasSelecionadas[1];

    // Verificar se o tipo das cartas é um par
    if (primeiraCarta.tipo !== segundaCarta.tipo) {
        const cartasFlipped = document.querySelectorAll('.flipped');
        cartasFlipped.forEach(carta => {
            carta.classList.remove('flipped');
            const verso = carta.querySelector('.verso');
            verso.style.display = 'none'; // Esconder o verso novamente
        });
    } else {
        paresEncontrados++;
        if (paresEncontrados === pares.length) {
            clearInterval(temporizador);
            mensagemDisplay.textContent = 'Você acertou tudo!';
        }
    }

    cartasSelecionadas = [];
    cartasSelecionadasId = [];
}

function atualizarTemporizador() {
    tempo++;
    temporizadorDisplay.textContent = tempo;
}

function reiniciarJogo() {
    tabuleiroJogo.innerHTML = '';
    cartasSelecionadas = [];
    cartasSelecionadasId = [];
    paresEncontrados = 0;
    tempo = 0;
    temporizadorDisplay.textContent = tempo;
    mensagemDisplay.textContent = '';
    clearInterval(temporizador);
    criarCartas();
    temporizador = setInterval(atualizarTemporizador, 1000);
}

botaoReiniciar.addEventListener('click', reiniciarJogo);
reiniciarJogo();
