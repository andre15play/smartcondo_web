const $html = document.querySelector('tela_inicio.html');
const $button = document.querySelector('#btn-dark-mode');

$button.addEventListener('click', () =>{
    $html.classList.toggle('dark-mode');
})