const p1 = {
    score: 0,
    name: "Player 1",
    button: document.querySelector('#player1'),
    display: document.querySelector('#p1')
}
const p2 = {
    score: 0,
    name: "Player 2",
    button: document.querySelector('#player2'),
    display: document.querySelector('#p2')
}


const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo')
const scoreBoard = document.querySelector('#scoreBoard')


let playto = parseInt(playToSelect.value);
let isGameOver = false;


p2.display.innerText = p2.score;
p1.display.innerText = p1.score;

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        playToSelect.disabled = true;
        if (player.score === playto) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;

            const banner = document.createElement('p');
            banner.append(`${player.name} Wins! `);
            scoreBoard.append(banner);

        }
        player.display.innerText = player.score;
    }
}




playToSelect.addEventListener('change', function () {
    playto = parseInt(playToSelect.value);

})

const disable = () => {
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
}


resetButton.addEventListener('click', function () {
    p1.score = 0;
    p1.display.innerText = p1.score;
    p1.display.classList.remove('winner', 'loser');
    p2.score = 0;
    p2.display.innerText = p2.score;
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
    playToSelect.disabled = false;
    isGameOver = false;
    scoreBoard.removeChild(scoreBoard.lastChild);
})