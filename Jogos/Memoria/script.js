let inicioTempo = new Date(); // marca o tempo
const cartas = document.querySelectorAll(".carta-memoria");

let cartaVirada = false;
let travarTabuleiro = false;
let primeiraCarta, segundaCarta;
let paresEncontrados = 0;
let totalPares = cartas.length / 2; 




// when click:
function virarCarta() {
  if (travarTabuleiro) return;
  if (this === primeiraCarta) return; 

  this.classList.add("virada");

  // primeira carta
  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;
    return;
  }

  // marca a segunda carta
  segundaCarta = this;
  verificarPar();
}

// é um par?
function verificarPar() {
  let ehPar = primeiraCarta.dataset.estrutura === segundaCarta.dataset.estrutura;

  ehPar ? desabilitarCartas() : desvirarCartas();
}

function desabilitarCartas() {
  primeiraCarta.removeEventListener("click", virarCarta);
  segundaCarta.removeEventListener("click", virarCarta);

  paresEncontrados++; 

  // se todos os pares foram encontrados
  if (paresEncontrados === totalPares) {
    setTimeout(finalizarJogo, 500); // Aguarda um tempo antes de finalizar, para dar um efeito visual
  }

  resetarTabuleiro();
}

function desvirarCartas() {
  travarTabuleiro = true;

  setTimeout(() => {
    primeiraCarta.classList.remove("virada");
    segundaCarta.classList.remove("virada");

    resetarTabuleiro();
  }, 1500);
}

function resetarTabuleiro() {
  [cartaVirada, travarTabuleiro] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

// embaralha as cartas
(function embaralhar() {
  cartas.forEach((carta) => {
    let posicaoAleatoria = Math.floor(Math.random() * cartas.length);
    carta.style.order = posicaoAleatoria;
  });
})();

// when clique, virar a carta
cartas.forEach((carta) => carta.addEventListener("click", virarCarta));



// quando acaba
function finalizarJogo() {
  const tempoFinal = new Date();
  const tempoGasto = ((tempoFinal - inicioTempo) / 1000).toFixed(2);

  // mostra o resultadi
  document.getElementById("cartas").classList.add("escondido");
  document.getElementById("resultado").classList.remove("escondido");

  // reseta td
  document.getElementById("resumo").innerText = `Você acertou todos os pares!`;
  document.getElementById("tempo").innerText = `Tempo gasto: ${tempoGasto} segundos.`;
}


// reinicia
function reiniciarJogo() {
  inicioTempo = new Date(); 
  paresEncontrados = 0; 

  cartas.forEach((carta) => {
    carta.classList.remove("virada");
    carta.addEventListener("click", virarCarta); 
  });

  document.getElementById("resultado").classList.add("escondido");
  document.getElementById("cartas").classList.remove("escondido");

  embaralhar(); 
  resetarTabuleiro(); 
}
