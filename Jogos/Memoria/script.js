const cartas = document.querySelectorAll(".carta-memoria");


let cartaVirada = false; 
let travarTabuleiro = false; // trava o jogo
let primeiraCarta, segundaCarta; 

//Quando clica
function virarCarta() {
  if (travarTabuleiro) return; 
  if (this === primeiraCarta) return; // Impede que a mesma carta seja virada duas vezes seguidas

  this.classList.add("virada"); // coloca "virada" quando acerta

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

//verifica se são um par
function verificarPar() {
  // if = carta1 = carta2:
  let ehPar = primeiraCarta.dataset.estrutura === segundaCarta.dataset.estrutura;

  // Se for par, desabilita as cartas, senão, vira dnv
  ehPar ? desabilitarCartas() : desvirarCartas();
}


function desabilitarCartas() {
  // trava o click se acertar
  primeiraCarta.removeEventListener("click", virarCarta);
  segundaCarta.removeEventListener("click", virarCarta);


  resetarTabuleiro();
}

// desvira a carta se nn acertar
function desvirarCartas() {
  travarTabuleiro = true; 


  setTimeout(() => {
    primeiraCarta.classList.remove("virada"); // tira a classe "virada" 
    segundaCarta.classList.remove("virada"); // tira a classe "virada" 

    resetarTabuleiro(); // Reseta o tabuleiro
  }, 1500);
}


function resetarTabuleiro() {
  [cartaVirada, travarTabuleiro] = [false, false]; 
  [primeiraCarta, segundaCarta] = [null, null]; 
}

// embaralha pra que nn fique no msm lugar
(function embaralhar() {
  cartas.forEach((carta) => {
    let posicaoAleatoria = Math.floor(Math.random() * 12);
    carta.style.order = posicaoAleatoria;
  });
})();

// quando clica vira a carta
cartas.forEach((carta) => carta.addEventListener("click", virarCarta));
