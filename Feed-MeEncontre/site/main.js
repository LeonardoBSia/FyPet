// Capturar evento de submit do formulário
const form = document.querySelector('.search');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputSearch = e.target.querySelector('#search');
    const valor = inputSearch.value;
    console.log(valor);
});