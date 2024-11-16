// Remova duplicatas de declaração e declare as variáveis apenas uma vez
const videoContainer = document.querySelector('.video');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

// Lista de vídeos e suas informações
const videos = [
    {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Introdução à Libras',
        description: 'Uma introdução básica ao uso da Libras no cotidiano. Tempo de duração: 10 minutos'
    },
    {
        src: 'https://www.w3schools.com/html/movie.mp4',
        title: 'Aula Intermediária',
        description: 'Aula intermediária para melhorar a fluência na Libras. Tempo de duração: 15 minutos'
    },
    {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Aula Avançada',
        description: 'Aula avançada para domínio completo da Libras. Tempo de duração: 20 minutos'
    }
];

let currentVideo = 0;

// Função para atualizar o conteúdo do carrossel
function atualizarCarrossel() {
    console.log("Atualizando carrossel para o vídeo:", currentVideo);

    const videoElement = videoContainer.querySelector('video');
    const titleElement = videoContainer.querySelector('h1');
    const descriptionElement = videoContainer.querySelector('p');

    videoContainer.style.opacity = 0;

    setTimeout(() => {
        videoElement.src = videos[currentVideo].src;
        titleElement.textContent = videos[currentVideo].title;
        descriptionElement.innerHTML = videos[currentVideo].description;

        videoContainer.style.opacity = 1;
    }, 300);
}

// Configurar os eventos dos botões de navegação
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

// Inicializar o carrossel com o primeiro vídeo
atualizarCarrossel();
