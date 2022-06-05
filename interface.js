
//criando quadrados
(function buildSquare() {
    const body = document.querySelector('body')
    const main = document.createElement('main')
    body.insertAdjacentElement("afterbegin", main)
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.id = i;
        main.insertAdjacentElement('beforeend', square);
        // square.innerHTML = 'X';
    }
}())

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target;
    let postion = square.id;
    handleMove(postion);
    updateSquares()

}

function updateSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        // console.log(square)
        let postion = square.id;
        let symbol = board[postion];
        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`

        }
    })
}

function getSeq() {



}
