const bancoDeDados = {
    "oi": {
        imagem: "https://files.passeidireto.com/d505993c-a4c4-409b-acea-54105fa7f805/d505993c-a4c4-409b-acea-54105fa7f805.jpeg",
        video: "https://youtu.be/3iUZju5h5gw?si=narSOCz9ui2zlAYV",
    },
    "gato": {
        imagem: "https://exemplo.com/imagens/gato.jpg",
        video: "https://exemplo.com/videos/gato.mp4"
    },
    "carro": {
        imagem: "https://exemplo.com/imagens/carro.jpg",
        video: "https://exemplo.com/videos/carro.mp4",
    }
    // Adicione mais palavras aqui
};

// Selecionando elementos do HTML
let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result');

// Função de busca
btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value.toLowerCase();  // Converte a entrada para minúsculas
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva a palavra que deseja aprender em Libras!</p>`;
    } else if (bancoDeDados[palavra]) {
        // Se a palavra existe no "banco de dados"
        const { imagem, video } = bancoDeDados[palavra];
        resultado.innerHTML = `
            <h3 id="container__palavra">${palavra}</h3>
            <img src="${imagem}" alt="Imagem de ${palavra}" style="width: 200px; height: auto;">
            <video src="${video}" controls style="width: 300px; height: auto; margin-top: 10px;"></video>
        `;
    } else {
        
        // Se a palavra não foi encontrada
        resultado.innerHTML = `<p id="container__significado"><span>Esta palavra</span> ainda não se encontra em nosso banco de dados.</p>`;
    }
});

