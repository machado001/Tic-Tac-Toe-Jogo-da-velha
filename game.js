const board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
const symbols = ['x', 'o'];

function handleMove(position) {
    board[position] = symbols[playerTime];
    if (playerTime == 0) {
        playerTime = 1
    }
    else {
        playerTime = 0
    }

}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winStates.forEach(
        (subArray) => {
            subArray.forEach(
                (subItem) => {
                    let x = subArray.indexOf(subItem)
                    console.log(x)
                }
            )
        }

    )
}
isWin()