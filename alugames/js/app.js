
function alterarStatus(id) {
 
    let jogoClicado = document.getElementById(`game-${id}`);
   
    let imagem = jogoClicado.querySelector('.dashboard__item__img');

    let botao = jogoClicado.querySelector('.dashboard__item__button');

    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
;

    if(imagem.classList.contains('dashboard__item__img--rented')) {

        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Comprar';
        botao.classList.remove('dashboard__item__button--return');

    } else {

        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');

    }
}