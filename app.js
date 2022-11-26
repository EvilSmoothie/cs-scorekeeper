const playerOneButton = document.querySelector('#player1');
const playerTwoButton = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo')
const scoreBoard = document.querySelector('#scoreBoard')

const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');


let playto = parseInt(playToSelect.value);
let p1Score = 0;
let p2Score = 0;




p2Display.innerText = p2Score;
p1Display.innerText = p1Score;

playToSelect.addEventListener('change', function () {
    playto = parseInt(playToSelect.value);

})

const disable = () => {
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
}

playerOneButton.addEventListener('click', function (e) {
    p1Score += 1;
    p1Display.innerText = p1Score;

    if (p1Score === playto) {
        const banner = document.createElement('p');
        banner.append('Player One Wins!');
        scoreBoard.append(banner);
        disable()
    };

})

playerTwoButton.addEventListener('click', function () {
    p2Score += 1;
    p2Display.innerText = p2Score;
    if (p2Score === playto) {
        const banner = document.createElement('p');
        banner.append('Player Two Wins!');
        scoreBoard.append(banner);
        disable();
    };
})



resetButton.addEventListener('click', function () {
    p1Score = 0;
    p1Display.innerText = p1Score;
    p2Score = 0;
    p2Display.innerText = p2Score;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    scoreBoard.removeChild(scoreBoard.lastChild);
})