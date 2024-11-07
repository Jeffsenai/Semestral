const perguntas = [
    { pergunta: "Qual é o sinal para a palavra 'Amor'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/amor.jpg", "imagens/amor2.png", "imagens/amor3.png", "imagens/amor4.png"], resposta: 0 },
    { pergunta: "Qual sinal representa a letra 'A'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/a1.png", "imagens/a2.png", "imagens/a3.png", "imagens/a4.png"], resposta: 1 },
    { pergunta: "Qual é o sinal para a palavra 'Família'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/familia1.png", "imagens/familia2.png", "imagens/familia3.png", "imagens/familia4.png"], resposta: 2 },
    { pergunta: "Qual é o sinal para a palavra 'Mãe'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/cachorro.jpeg", "imagens/mae2.png", "imagens/mae3.png", "imagens/mae4.png"], resposta: 3 },
    { pergunta: "Qual sinal representa a letra 'B'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/b1.png", "imagens/b2.png", "imagens/b3.png", "imagens/b4.png"], resposta: 0 },
    { pergunta: "Qual é o sinal para a palavra 'Obrigado'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/obrigado1.png", "imagens/obrigado2.png", "imagens/obrigado3.png", "imagens/obrigado4.png"], resposta: 1 },
    { pergunta: "Qual é o sinal para a palavra 'Casa'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/casa1.png", "imagens/casa2.png", "imagens/casa3.png", "imagens/casa4.png"], resposta: 2 },
    { pergunta: "Qual é o sinal para a palavra 'Escola'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/escola1.png", "imagens/escola2.png", "imagens/escola3.png", "imagens/escola4.png"], resposta: 3 },
    { pergunta: "Qual sinal representa a letra 'C'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/c1.png", "imagens/c2.png", "imagens/c3.png", "imagens/c4.png"], resposta: 0 },
    { pergunta: "Qual é o sinal para a palavra 'Trabalho'?", opcoes: ["A", "B", "C", "D"], imagens: ["imagens/trabalho1.png", "imagens/trabalho2.png", "imagens/trabalho3.png", "imagens/trabalho4.png"], resposta: 1 }
  ];
  
  let perguntaAtual = 0;
  let respostasCorretas = 0;
  let respostasErradas = 0;
  let inicioTempo = 0;
  
  function iniciarQuiz() {
    document.getElementById("iniciar").classList.add("escondido");
    document.getElementById("quiz").classList.remove("escondido");
    inicioTempo = new Date();
    mostrarPergunta();
  }
  

  function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";
    pergunta.opcoes.forEach((opcao, index) => {
      const botao = document.createElement("button");
      botao.onclick = () => verificarResposta(index);
      botao.classList.add("opcao");
  
      // Adiciona a imagem na opção
      const imagem = document.createElement("img");
      imagem.src = pergunta.imagens[index];
      imagem.alt = `Imagem para opção ${index + 1}`;
      imagem.classList.add("imagem-opcao");
  
      // Adiciona o texto da opção
      const textoOpcao = document.createElement("span");
      textoOpcao.innerText = opcao;
  
      // Adiciona a imagem e o texto ao botão
      botao.appendChild(imagem);
      botao.appendChild(textoOpcao);
      botao.style.animation = "aparecer 0.5s ease";
      opcoesContainer.appendChild(botao);
    });
  }
  
  function verificarResposta(opcaoSelecionada) {
    const pergunta = perguntas[perguntaAtual];
    if (opcaoSelecionada === pergunta.resposta) {
      respostasCorretas++;
    } else {
      respostasErradas++;
    }
    document.getElementById("proximo").style.display = "inline-block";
  }
  
  function proximaPergunta() {
    document.getElementById("proximo").style.display = "none";
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      finalizarQuiz();
    }
  }
  
  function finalizarQuiz() {
    const tempoFinal = new Date();
    const tempoGasto = ((tempoFinal - inicioTempo) / 1000).toFixed(2);
    document.getElementById("quiz").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");
    document.getElementById("resumo").innerText = `Você acertou ${respostasCorretas} e errou ${respostasErradas} perguntas.`;
    document.getElementById("tempo").innerText = `Tempo gasto: ${tempoGasto} segundos.`;
  }
  
  function reiniciarQuiz() {
    perguntaAtual = 0;
    respostasCorretas = 0;
    respostasErradas = 0;
    document.getElementById
  }  

  function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";
    pergunta.opcoes.forEach((opcao, index) => {
      const botao = document.createElement("button");
      botao.onclick = () => verificarResposta(index);
      botao.classList.add("opcao");
  
      // Adiciona a imagem na opção
      const imagem = document.createElement("img");
      imagem.src = pergunta.imagens[index];
      imagem.alt = `Imagem para opção ${index + 1}`;
      imagem.classList.add("imagem-opcao");
  
      // Adiciona o texto da opção
      const textoOpcao = document.createElement("span");
      textoOpcao.innerText = opcao;
  
      // Adiciona a imagem e o texto ao botão
      botao.appendChild(imagem);
      botao.appendChild(textoOpcao);
      opcoesContainer.appendChild(botao);
    });
  }

  function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.onclick = () => selecionarOpcao(botao, index);
        botao.classList.add("opcao");

        const imagem = document.createElement("img");
        imagem.src = pergunta.imagens[index];
        imagem.alt = `Imagem para opção ${index + 1}`;
        imagem.classList.add("imagem-opcao");

        const textoOpcao = document.createElement("span");
        textoOpcao.innerText = opcao;

        botao.appendChild(imagem);
        botao.appendChild(textoOpcao);
        opcoesContainer.appendChild(botao);
    });
}

function selecionarOpcao(botao, index) {
    const opcoes = document.querySelectorAll(".opcao");
    opcoes.forEach(opcao => opcao.classList.remove("selecionado"));
    botao.classList.add("selecionado");
    verificarResposta(index);
}