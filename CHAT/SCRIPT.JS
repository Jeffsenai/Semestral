// Mostrar o chat ao clicar no botão
document.getElementById("open-chat-btn").addEventListener("click", () => {
    document.querySelector(".chat-container").classList.remove("hidden");
    document.getElementById("open-chat-btn").classList.add("hidden");
  });
  
  // Lógica do chat
  document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const chatWindow = document.getElementById("chat-window");
  
    if (userInput) {
      addMessage("Você", "user-pic.png", userInput, "user");
      document.getElementById("user-input").value = "";
  
      let botResponse = "";
  
      // Lógica de resposta
      if (userInput === "oi") {
        botResponse = "Olá meu amigão";
      } else {
        botResponse = "Desculpe, não entendi sua mensagem.";
      }
  
      setTimeout(() => addMessage("Bot", "bot-pic.png", botResponse, "bot"), 500);
    }
  });
  
  function addMessage(name, avatar, text, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
  
    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `
      <img src="${avatar}" alt="${name}">
      <span>${name}</span>
    `;
  
    const messageText = document.createElement("div");
    messageText.className = "text";
    messageText.textContent = text;
  
    messageElement.appendChild(details);
    messageElement.appendChild(messageText);
    document.getElementById("chat-window").appendChild(messageElement);
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
  }
  