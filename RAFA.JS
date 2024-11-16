document.querySelector('.next').addEventListener('click', () => {
    const numeros = document.querySelector('.numeros');
    const numeros1 = document.querySelector('.numeros1');

    // CRIA O NUMEROS2 (primeiro clique)
    let numeros2 = document.querySelector('.numeros2');
    if (!numeros2) {
        numeros2 = document.createElement('div');
        numeros2.classList.add('numeros2');
        numeros2.innerHTML = `
            <div class="numero2">
                <div class="numbertext2">
                    <h1 class="um">3</h1>
                    <h2 class="number1"><span class="dois">Meta</span></h2>
                </div>
                <p class="num1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laproident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        `;
        document.querySelector('.quemSomos').appendChild(numeros2);
    }

    // DESIGN DO NUMEROS2
    numeros2.style.backgroundColor = '#F6F1E7'; 
    numeros2.style.color = '#426CC2'; 
    numeros2.style.opacity = '0'; // Torna números2 invisível inicialmente

    // ANIMAÇÃO - Primeiro clique (transição de opacidade)
    numeros.style.transition = 'opacity 0.5s';
    numeros.style.opacity = '0'; // Torna numeros invisível

    numeros1.style.transition = 'opacity 0.5s, background-color 0.5s, color 0.5s';
    numeros1.style.opacity = '0'; // Torna numeros1 invisível

    setTimeout(() => {
        // ESCONDE O NUMEROS
        numeros.style.display = 'none';

        // Muda o design de numeros1 para corresponder ao design final
        numeros1.style.backgroundColor = '#0B1956';
        let h1 = numeros1.querySelector('h1');
        let p = numeros1.querySelector('p');
        let h2 = numeros1.querySelector('h2');
        h1.style.color = 'white'; 
        p.style.color = 'white'; 
        h2.style.color = 'white'; 
        
        // Deixa o bloco numeros1 visível novamente
        numeros1.style.opacity = '1';

        // Estiliza e aparece o bloco numeros2
        numeros2.style.transition = 'opacity 0.5s, background-color 0.5s, color 0.5s';
        numeros2.style.opacity = '1'; 
        numeros2.style.backgroundColor = '#F6F1E7';
        numeros2.style.color = '#0B1956';

    }, 500);

    // SEGUNDO CLIQUE - Quando for clicado novamente, números2 vai para o lugar de numeros1
    setTimeout(() => {
        // Muda o numero2 para o lugar de numero1
        numeros2.style.transition = 'opacity 0.5s, transform 0.5s';
        numeros2.style.opacity = '1'; // Deixa visível o numero2
        numeros2.style.transform = 'translateY(0)'; // Posiciona o numero2 no lugar de numero1
        numeros2.style.backgroundColor = 're';
        let h1 = numeros2.querySelector('h1');  
        h1.style.color = '#0B1956';
        numeros1.style.display = 'none'; // Esconde numero1
        

        // CRIA O NUMEROS3 (novo bloco com o mesmo estilo do numeros2 original)
        let numeros3 = document.querySelector('.numeros3');
        if (!numeros3) {
            numeros3 = document.createElement('div');
            numeros3.classList.add('numeros3');
            numeros3.innerHTML = `
                <div class="numero3">
                    <div class="numbertext3">
                        <h1 class="um">4</h1>
                        <h2 class="number1"><span class="dois">Final</span></h2>
                    </div>
                    <p class="num1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laproident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            `;
            document.querySelector('.quemSomos').appendChild(numeros3);
        }

        // DESIGN DO NUMEROS3
        numeros3.style.backgroundColor = '##F6F1E7';
        numeros3.style.color = '#white'; 
        numeros3.style.opacity = '0'; // Inicialmente invisível
        numeros3.style.transition = 'opacity 0.5s, background-color 0.5s, color 0.5s';

        setTimeout(() => {
            numeros3.style.opacity = '1'; // Torna visível o numero3 com animação
        }, 5000); // Espera o tempo da animação para mostrar o numero3
    }, 10000); // Espera o tempo da animação do primeiro clique para mostrar o segundo clique
});
