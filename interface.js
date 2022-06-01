(function buildSquare() {
    const body = document.querySelector('body')
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement('div')
        console.log(square)
        square.className = 'square'
        square.id = i
        const addDiv = body.insertAdjacentElement('afterbegin',square)
    }

}())
