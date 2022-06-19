
//criando quadrados
(function buildSquare() {
    const body = document.querySelector('body')
    const main = document.createElement('main')
    body.insertAdjacentElement("afterbegin", main)
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.id = i;
        main.insertAdjacentElement('beforeend', square);

    }
}())
//add click nos quadrados
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', handleClick)
    })
})
//handleclick captura a id do quadrado clicado
function handleClick(event) {
    let square = event.target;
    let postion = square.id;
    handleMove(postion);
    updateSquares()

}
//alterna entre X e O
function updateSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        // console.log(square)
        let postion = square.id;
        let symbol = board[postion];
        if (symbol != '' ) {
            square.innerHTML = `<div class='${symbol}'></div>`

        }
    })
}

