const game = document.querySelector('.game');
const bird = document.querySelector('.bird');
const pipes = document.querySelectorAll('.pipe');

const gravity = 1;
const velocity = 75;
const pipeSpeed = 10;

const currentPosition = (element) => ([element.getBoundingClientRect().left, element.getBoundingClientRect().top]);

const pipeTopTemplates = [
    '<div class="pipe pipe-top-01" style="right: -75px"></div>',
    '<div class="pipe pipe-top-02" style="right: -75px"></div>',
    '<div class="pipe pipe-top-03" style="right: -75px"></div>'
]
const pipeBottomTemplates = [
    '<div class="pipe pipe-bottom-01" style="right: -75px"></div>',
    '<div class="pipe pipe-bottom-02" style="right: -75px"></div>',
    '<div class="pipe pipe-bottom-03" style="right: -75px"></div>'
]

// The pipe configurations will be ordered [TopPipe, BottomPipe]
const pipeConfigurations = [
    [1, 1],
    [1, 2],
    [1, 3],

    [2, 1],
    [2, 2],
    [2, 3],

    [3, 1],
    [3, 2],
    [3, 3]
]


const inputLogic = {
    'jump': (currPos) => {
        bird.style.top = `${currPos[1] - velocity}px`;
    }
};
const inputMap = {
    'w': 'jump',
    'ArrowUp': 'jump'
};
let timeouts = [];
let pipeGenTimouts = [];
let pipeMovementTimouts = [];

const clearTimeouts = (arr) => {
    arr.forEach(t => clearTimeout(t));
    arr = [];
};

const handleInput = (key) => {
    let currPos = currentPosition(bird);
    let input = inputMap[key];
    let movementFunc = inputLogic[input];

    movementFunc(currPos);
};

const generatePipes = (pipeConfig) => {
    pipes.innerHTML += pipeTopTemplates[pipeConfig[0]];
    pipes.innerHTML += pipeBottomTemplates[pipeConfig[1]];
};

const handlePipeGeneration = () => {
    clearTimeouts(pipeGenTimouts);
    let loop = () => {
        let randomIndex = 0;
        let pipeConfig = pipeConfigurations[randomIndex];
    
        generatePipes(pipeConfig);
        
        let t = setTimeout(loop, 5000);
        pipeGenTimouts.push(t);
    }
    loop();
};
handlePipeGeneration();

document.addEventListener('keypress', function (event) {
    handleInput(event.key);
});

const handleGravity = () => {
    clearTimeouts(timeouts);
    
    let loop = () => {
        let currPos = currentPosition(bird);
        let currY = Math.floor(currPos[1]);
        bird.style.top = `${currPos[1] - gravity}px`;
        
        if (currY < game.getBoundingClientRect().bottom)
        {
            let t = setTimeout(loop, 10);
            timeouts.push(t);
        } else {
            clearTimeouts(timeouts);
        }
    }
    loop();
}
handleGravity();