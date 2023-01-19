const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clound = document.querySelector('.clound');
let score = document.querySelector('.score');
let death = false;

let playerScore = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let scoreCounter = () => {
    if (death != true) {
        playerScore++;
        score.innerHTML = 'Score : ' + playerScore;
    } else {
        score.innerHTML = 'Score : ' + playerScore;
    }

}

const temp = setInterval(() => {
    interval = setInterval(scoreCounter, 200);
}, 500);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "none";
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = "none";
        mario.style.left = '${marioPosition}px';

        mario.src = "img/Mario/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        death = true;

        clearInterval(loop);
        let playerScore = 0;
    }
}, 10);

document.addEventListener('keydown', jump);