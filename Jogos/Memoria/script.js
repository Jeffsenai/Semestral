const cartas = document.querySelectorAll(".carta-memoria");

let cartaVirada = false;
let travarTabuleiro = false;
let primeiraCarta, segundaCarta;

function virarCarta() {
  if (travarTabuleiro) return;
  if (this === primeiraCarta) return;

  this.classList.add("virada");

  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;

    return;
  }

  segundaCarta = this;
  verificarPar();
}

function verificarPar() {
  let ehPar = primeiraCarta.dataset.estrutura === segundaCarta.dataset.estrutura;

  ehPar ? desabilitarCartas() : desvirarCartas();
}

function desabilitarCartas() {
  primeiraCarta.removeEventListener("click", virarCarta);
  segundaCarta.removeEventListener("click", virarCarta);

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

(function embaralhar() {
  cartas.forEach((carta) => {
    let posicaoAleatoria = Math.floor(Math.random() * 12);
    carta.style.order = posicaoAleatoria;
  });
})();

cartas.forEach((carta) => carta.addEventListener("click", virarCarta));
