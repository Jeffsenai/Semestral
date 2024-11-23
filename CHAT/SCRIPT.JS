// quando clica no botão abre o chat
document.getElementById("abrir-chat-btn").addEventListener("click", () => {
  document.querySelector(".container-chat").classList.remove("escondido");

 
  document.getElementById("abrir-chat-btn").classList.add("escondido");
});


document.getElementById("enviar-btn").addEventListener("click", () => {
  // guarda td que o usuario digitar e transforma em minisculo
  const entradaUsuario = document.getElementById("entrada-usuario").value.trim().toLowerCase();

  // pra onde vai a msg digitada
  const janelaChat = document.getElementById("janela-chat");


  if (entradaUsuario) {
    // nome + foto + mensagem 
    adicionarMensagem("Você", "Imagens/bot.jpg", entradaUsuario, "usuario");

    // apaga a msg que foi escrita
    document.getElementById("entrada-usuario").value = "";

    // Variável que irá armazenar a resposta do bot
    let respostaBot = "";

    // respostas do chat
    if (entradaUsuario === "oi") {
      respostaBot = "Olá, querido amigo (a), sejá muito bem vindo (a) ao site da Librali!" ; 


    } else if (entradaUsuario === "o que é libras?") {
      respostaBot = "Libras (Língua Brasileira de Sinais) é a língua de sinais utilizada pela comunidade surda no Brasil. Ela possui sua própria gramática e vocabulário, sendo uma forma natural e visual de comunicação, baseada em gestos, expressões faciais e movimentos das mãos. Venha aprender mais sobre as Libras com a Librali!";


    } else if (entradaUsuario === "qual é o seu nome?") {
      respostaBot = "Eu sou o Bot da Librali! Como posso te ajudar?";
    
    } else if (entradaUsuario === "como posso aprender libras?") {
      respostaBot = "Você pode aprender Libras com a Librali! Temos diversos cursos e materiais que são disponibilizados de forma totalmente gratuita para você. Explore nosso site ou se preferir entre em contato conosco para saber mais!";

    
    } else if (entradaUsuario === "o que é a librali?") {
      respostaBot = "A Librali é uma plataforma online que visa promover o aprendizado de Libras oferecendo cursos, jogos e diversos materiais para que você se comunique de maneira plena e eficiente com toda a comunidade surda. (Além de ser minha criadora também :) ) Venha aprender Libras conosco!!";

    
    } else if (entradaUsuario === "o que é surdez?") {
      respostaBot = "A surdez é uma condição onde a pessoa tem perda auditiva. Algumas pessoas surdas usam Libras como sua língua principal para se comunicar.";
      

    } else if (entradaUsuario === "como posso me comunicar com surdos?") {
      respostaBot = "A melhor forma é aprender Libras! Dessa maneira, você pode se comunicar diretamente com pessoas surdas em sua língua nativa.";

    
    } else if (entradaUsuario === "quem pode aprender libras?") {
      respostaBot = "Qualquer pessoa pode aprender Libras! Não importa a sua idade, aprender Libras é uma ótima maneira de se comunicar com a comunidade surda. E não importa também, se você não tem conhecimento nenhum acerca do tema, nós da Librali oferecemos conteúdo desde o nível básico até o avançado para que você consiga aprender";
      

    } else if (entradaUsuario === "qual é o alfabeto de libras?") {
      respostaBot = "O alfabeto de Libras é composto por sinais manuais que representam as letras do alfabeto português. Você pode aprender o alfabeto em nosso curso!";


    
    } else if (entradaUsuario === "qual a diferença entre libras e sinais em outros países?") {
      respostaBot = "Cada país tem sua própria língua de sinais. Por exemplo, nos Estados Unidos, a língua de sinais é chamada de ASL (American Sign Language). A Libras é específica para o Brasil e possui suas próprias particularidades.";
      

    } else if (entradaUsuario === "a librali oferece cursos?") {
      respostaBot = "Sim! A Librali oferece cursos de Libras para iniciantes, intermediários e avançados. Navegue por nosso site na seção de 'Cursos' ou se preferir entre em contato conosco para mais informações.";
    


    } else if (entradaUsuario === "quanto custa os materiais de libras?") {
      respostaBot = "Todo o material disponibilizado pela Librali é totalmente gratuito, para que assim o conteúdo possa ficar disponível e acessível para toda a sociedade";

    
    } else if (entradaUsuario === "qual a importância da libras?") {
      respostaBot = "Libras é importante porque é a língua nativa das pessoas surdas no Brasil, permitindo que elas se comuniquem de forma plena e igualitária com a sociedade.";


    
    } else if (entradaUsuario === "qual é o seu trabalho?") {
      respostaBot = "Meu trabalho é ajudar você a aprender sobre Libras e fornecer informações sobre a Librali!";
    

    } else {
      respostaBot = "Desculpe, ainda não sei responder isso :( , mas você pode entrar em contato com a Librali por meio de e-mail: librali@gmail.com ou também por meio de nosso Instagram: @librali.";
    }
    
  
    // delay de 5 segundos para responder
    setTimeout(() => adicionarMensagem("Bot", "Imagens/bot2.jpg", respostaBot, "bot"), 500);
  }
});

// adiciona uma nova janela
function adicionarMensagem(nome, avatar, texto, remetente) {
  // cria uma div p cada msg
  const elementoMensagem = document.createElement("div");

  // coloca classe e quem mandou
  elementoMensagem.className = `mensagem ${remetente}-mensagem`;

  // cria uma nova div p nome do remetente e avatar
  const detalhes = document.createElement("div");
  detalhes.className = "detalhes";
  
  // coloca imagem e nome
  detalhes.innerHTML = `
    <img src="${avatar}" alt="${nome}">
    <span>${nome}</span>
  `;

  //div para o texto 
  const textoMensagem = document.createElement("div");
  textoMensagem.className = "texto";
  
  // coloca o texto na div
  textoMensagem.textContent = texto;

  // junta td
  elementoMensagem.appendChild(detalhes);
  elementoMensagem.appendChild(textoMensagem);

  // coloca a msg na janela
  document.getElementById("janela-chat").appendChild(elementoMensagem);

  // scrola automatico
  document.getElementById("janela-chat").scrollTop = document.getElementById("janela-chat").scrollHeight;
}



// Abre
document.getElementById("abrir-chat-btn").addEventListener("click", () => {
  document.querySelector(".container-chat").classList.remove("escondido");
  document.getElementById("abrir-chat-btn").classList.add("escondido");
});

// Fecha
document.getElementById("fechar-chat-btn").addEventListener("click", () => {
  document.querySelector(".container-chat").classList.add("escondido");
  document.getElementById("abrir-chat-btn").classList.remove("escondido");
});
