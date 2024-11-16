document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.querySelector('.video');
    const imagemEsquerda = document.querySelector('.imagemEsquerda img');
    const imagemDireita = document.querySelector('.imagemDireita img');
    const btnEsquerda = document.querySelector('.seta-esquerda');
    const btnDireita = document.querySelector('.seta-direita');

 

    const videos = [
        {
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            title: 'Introdução à Libras',
            description: 'Uma introdução básica ao uso da Libras no cotidiano. Tempo de duração: 10 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda.png',
            imgDireita: 'Imagens/imagemDireita.png'
            
        },
        {
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            title: 'Aula Intermediária',
            description: 'Aula intermediária para melhorar a fluência na Libras. Tempo de duração: 15 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda2.png',
            imgDireita: 'Imagens/imagemDireita2.png'
        },
        {
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            title: 'Aula Avançada',
            description: 'Aula avançada para domínio completo da Libras. Tempo de duração: 20 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda3.png',
            imgDireita: 'Imagens/imagemDireita3.png'

        }
    ];

    let currentVideo = 0;

    
    function atualizarCarrossel() {
        console.log("Atualizando carrossel para o vídeo:", currentVideo);

        const videoElement = videoContainer.querySelector('video');
        const titleElement = videoContainer.querySelector('h1');
        const descriptionElement = videoContainer.querySelector('p');

        videoContainer.style.opacity = 0;

        setTimeout(() => {
            videoElement.src = videos[currentVideo].src;
            titleElement.textContent = videos[currentVideo].title;
            descriptionElement.textContent = videos[currentVideo].description;
            imagemEsquerda.src = videos[currentVideo].imgEsquerda;
            imagemDireita.src = videos[currentVideo].imgDireita;

            videoContainer.style.opacity = 1;
        }, 300);
    }

   
    btnDireita.addEventListener('click', () => {
        console.log("Botão direita clicado");
        currentVideo = (currentVideo + 1) % videos.length; 
        atualizarCarrossel();
    });

    btnEsquerda.addEventListener('click', () => {
        console.log("Botão esquerda clicado");
       
        currentVideo = (currentVideo - 1 + videos.length) % videos.length;
        atualizarCarrossel();
    });

    atualizarCarrossel();
});
