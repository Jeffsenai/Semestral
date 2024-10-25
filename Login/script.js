const container = document.getElementById('container');
const cadastrarBtn = document.getElementById('cadastrar');
const entrarBtn = document.getElementById('entrar');

cadastrarBtn.addEventListener('click', () => {
    container.classList.add("active");
});

entrarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
