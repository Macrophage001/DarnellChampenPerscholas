const tilesDiv = document.querySelector('.tiles');
const mario = document.querySelector('#mario');

let velocity = 1;
let oldKey = '';
let currentKey = '';

const tile = (tilePosition) => 
    `<div class="tile" data-solid=true style="--tile-x:${tilePosition.tileX}px; --tile-y:${tilePosition.tileY}px; --tile-s:16px;"></div>`;

const currentPosition = () => ([mario.getBoundingClientRect().left, mario.getBoundingClientRect().top]);
const positionLogic = {
    'left': (currPos) => {
        mario.style.left = `${currPos[0] - velocity}px`;
    },
    'right': (currPos) => {
        mario.style.left = `${currPos[0] + velocity}px`;
    }
}

const onBtnDown = (action, interval) => {
    var t;
    var repeat = function() {
        action();
        t = setTimeout(repeat, interval)
        timeouts.push(t);
    }

    repeat();
}
const timeouts = [];
const clearTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
}

const Tiles = [
    { tileX: 0, tileY: 0 },
    { tileX: -16, tileY: 0 },
    { tileX: -33, tileY: 0 },
]

const initializePosition = () => {
    mario.style.left = '50%';
    mario.style.bottom = '1%';
}

const handleInput = (event) => {
    const inputMap = {
        'a': 'left',
        'ArrowLeft': 'left',
        'd': 'right',
        'ArrowRight': 'right'
    };

    console.log(event.key);

    let dir = inputMap[event.key];
    let movementFunc = positionLogic[dir];
    movementFunc(currentPosition());
}

const generateWorld = () => {
    tilesDiv.innerHTML = "";
    let leftCornerTile = Tiles[0];
    let middleTile = Tiles[1];
    let rightCornerTile = Tiles[2];

    tilesDiv.innerHTML += tile(leftCornerTile);
    for (let i = 0; i < 128; i++) {
        tilesDiv.innerHTML += tile(middleTile);
    }
    tilesDiv.innerHTML += tile(rightCornerTile);
}

window.onload = function () {
    generateWorld();
    initializePosition();

    document.addEventListener('keydown', function (event) {
        clearTimeouts();
        let repeat = () => {
            handleInput(event);
            let t = setTimeout(repeat, 10);
            if (!timeouts.includes(t))
                timeouts.push(t);
        }
        repeat();
    });
    document.addEventListener('keyup', () => clearTimeouts());
}