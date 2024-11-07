let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result');

// Substitua com a URL da sua API ou banco de dados onde as imagens e vídeos estão armazenados
const urlBase = "https://exemplo.com/libras/";

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value.trim();
    
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva a palavra que deseja aprender em Libras!!</p>`;
    } else {
        // Monta as URLs da imagem e do vídeo com base na palavra
        const urlImagem = `${urlBase}imagens/${palavra}.jpg`; 
        const urlVideo = `${urlBase}videos/${palavra}.mp4`;
        
        // Exibe a imagem e o vídeo no container de resultados
        resultado.innerHTML = `
            <h3 id="container__palavra">${palavra}</h3>
            <img id="container__imagem" src="${urlImagem}" alt="Imagem de demonstração da palavra ${palavra} em Libras">
            <video id="container__video" controls>
                <source src="${urlVideo}" type="video/mp4">
               
            </video>
        `;  
    }
});
