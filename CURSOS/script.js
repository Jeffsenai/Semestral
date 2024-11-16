const carrossel = document.querySelector('.carrossel');
    const btnEsquerda = document.querySelector('.esquerda');
    const btnDireita = document.querySelector('.direita');

    // Declarar todas os livros e os coiso que precisa ter
    const livros = [
        [
            { img: 'Ebooks/CAPAebook1.png', title: 'Aprenda A Minha Tabuada em Libras' , link: 'https://issuu.com/annaloyde/docs/livro_-_minha_tabuada_em_libras'},
            { img: 'Ebooks/CAPAebook2.png', title: 'Você disse Libras? O acesso do surdo à educação', link: 'Ebooks/VoceDisseLibras.pdf'},
            { img: 'Ebooks/CAPAebook3.png', title: 'Intérpretes educacionais de Libras', link: 'https://febrapils.org.br/wp-content/uploads/2022/03/Interpretes-educacionais-de-Libras.pdf'}
        ],
        [
            { img: 'Ebooks/CAPAebook4.png', title: 'Apostila sobre Libras do Instituto Federal', link: 'Ebooks/ApostilaLibrasIFSC.pdf'},
            { img: 'Ebooks/CAPAebook5.png', title: 'Aprenda a se comunicar com pessoas surdas', link: 'https://drive.google.com/file/d/1Z3YSevOIy8CrMagsXS4-0B3PMv3VM2sf/view?ref=blog.inboarding.co'},
            { img: 'Ebooks/CAPAebook6.png', title: 'Livro 6', link: ''}
        ],
        [
            { img: 'Ebooks/CAPAebook7.png', title: 'Livro 7', link: ''},
            { img: 'Ebooks/CAPAebook8.png', title: 'Livro 8', link: ''},
            { img: 'Ebooks/CAPAebook9.png', title: 'Livro 9', link: ''}
        ]
    ];

    let currentSet = 0;




    // Muda os livros que aparece
    function atualizarCarrossel() {
        const livroDivs = carrossel.querySelectorAll('.livro');
        const novoSet = livros[currentSet];

        livroDivs.forEach((livroDiv, index) => {
            livroDiv.style.opacity = 0; 
            setTimeout(() => {
                const img = livroDiv.querySelector('img');
                const title = livroDiv.querySelector('p');
                const link = livroDiv.querySelector('a');

                img.src = novoSet[index].img;
                title.textContent = novoSet[index].title;
                link.href = novoSet[index].link;

                livroDiv.style.opacity = 1; 
            }, 300);
        });
    }


    // Setinha pra direita
    btnDireita.addEventListener('click', () => {
        currentSet = (currentSet + 1) % livros.length; 
        atualizarCarrossel();
    });


    // Setinha da esquerda
    btnEsquerda.addEventListener('click', () => {
        currentSet = (currentSet - 1 + livros.length) % livros.length; 
        atualizarCarrossel();
    });











    
