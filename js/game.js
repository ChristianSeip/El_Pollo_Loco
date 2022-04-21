let canvas, world, screen;
let keyboard = new Keyboard();
const music = new Audio('../audio/music.mp3');
music.loop = true;
let musicIsPlayed = false;

function init() {
    screen = document.getElementById('screen');
    canvas = screen.getElementsByTagName('canvas')[0];
    showStartScreen();
}

function showStartScreen() {
    //screen.style.backgroundImage = "url('../img/9.Intro _ Outro Image/Start Screen/Opción2.png')";
}

function startGame() {
    initLevel();
    toogleScreen();
    world = new World(canvas, keyboard);
}

function endGame() {
    screen.style.backgroundImage = "url('../img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png')";
    let btn = document.getElementById('btn');
    btn.setAttribute('onclick', 'window.location.reload()');
    btn.innerText = "Back to start";
    toogleScreen();
}

function toogleScreen() {
    document.getElementsByClassName('game-menu')[0].classList.toggle('hide');
    canvas.classList.toggle('hide');
}

/**
 * On Press Key Event Listener
 */
window.addEventListener('keydown', (e) => {
    if(!musicIsPlayed) {
        music.play();
    }


    switch(e.code) {
        case "KeyA":
            keyboard.SPACE = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "KeyF":
            canvas.requestFullscreen();
            break;
    }
});

/**
 * On Release Key Event Listener
 */
window.addEventListener('keyup', (e) => {
    switch(e.code) {
        case "KeyA":
            keyboard.SPACE = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
    }
});