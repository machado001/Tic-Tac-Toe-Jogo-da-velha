(function buildSquare() {
    const body = document.querySelector('body')
    const main = document.createElement('main')
    body.insertAdjacentElement("afterbegin",main)
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement('div')
        square.className = 'square'
        square.id = i
        main.insertAdjacentElement('beforeend',square)
    }
}())
