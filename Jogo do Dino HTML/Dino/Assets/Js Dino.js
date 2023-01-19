let container = document.querySelector('#container');
let dino = document.querySelector('.dino');
let cactus = document.querySelector('.block');
let estrada = document.querySelector('.road');
let nuven = document.querySelector('.cloud');
let score = document.querySelector('.score');
let gameOver = document.querySelector('.gameOver');

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = 'Score : ' + playerScore;
}


window.addEventListener('keydown', (start) => {
    if (start.code == "Space") {
        gameOver.style.display = 'none';
        cactus.classList.add("BlockActive");
        estrada.firstElementChild.style.animation = "CaminhoAnimado 1.5s linear infinite";
        nuven.firstElementChild.style.animation = "NuvenAnimada 50s linear infinite";
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));

    let blockLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 100) {
        gameOver.style.display = 'block';
        estrada.firstElementChild.style.animation = "none";
        nuven.firstElementChild.style.animation = "none";
        cactus.classList.remove("BlockActive");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);