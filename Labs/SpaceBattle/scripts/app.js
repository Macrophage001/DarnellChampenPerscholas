const ship = document.querySelector('.player-ship');
const shipHealth = document.querySelector('.player-ship::after');
const alienShips = document.getElementsByClassName('alien-ship');
const healthBars = document.getElementsByClassName('health-bar');

const attackBtn = document.getElementById('attack-btn');
const retreatBtn = document.getElementById('retreat-btn');

const GameStates = [
    'Win',
    'Lose',
    'Playing'
];
let CurrentState = '';

const currentTurn = document.getElementById('current-turn');

const range = (min, max) => Math.random() * (max - min) + min;

const alienStatsTemplate = (currentHull, maxHull, firepower, accuracy) => 
`
                <div class="alien-stats">
                    <p>HP:${currentHull}/${maxHull}</p>
                    <p>FP:${firepower}</p>
                    <p>A: ${accuracy}%</p>
                </div>
`


class Ship {
    constructor() {
        this.name = 'USS Assembly';
        this.maxHull = 20;
        this.currentHull = this.maxHull;
        this.firepower = 5;
    }

    DoDamage(target) {
        console.log(`${this.name} Attacking ${target.name}`);
        if (target.currentHull > 0) {
            let chance = Math.random();
            if (chance <= this.accuracy) {
                target.currentHull -= this.firepower;
                console.log(`${this.name} hit ${this.name} for ${this.firepower} damage!`)
            } else {
                console.log(`${this.name} missed!`);
            }
        } else {
            if (target === Aliens[CurrentAlienIndex]) {
                CurrentAlienIndex++;
            }
        }
    }

    Animate(element, className) {
        element.classList.add(className);
    }

    OnAnimationCompleted(element, className, callback) {
        element.classList.remove(className);
        this.DoDamage(Aliens[CurrentAlienIndex]);
        callback();
    }
}
class Alien {
    constructor(name) {
        this.name = name;
        this.maxHull = Math.trunc(range(3, 6));
        this.currentHull = this.maxHull;
        this.firepower = Math.trunc(range(2, 4));
        this.accuracy = range(.6, .8);
    }

    DoDamage(target) {
        console.log(`${this.name} Attacking ${target.name}`);
        if (target.currentHull > 0) {
            let chance = Math.random();
            if (chance <= this.accuracy) {
                target.currentHull -= this.firepower;
                console.log(`${this.name} hit ${this.name} for ${this.firepower} damage!`)
            } else {
                console.log(`${this.name} missed!`);
            }
        }
    }

    Animate(element, className) {
        element.classList.add(className);
    }

    OnAnimationCompleted(element, className, callback) {
        element.classList.remove(className);
        this.DoDamage(Aliens[CurrentAlienIndex]);
        callback();
    }
}

// 0 = Player, 1 = Alien.
let CurrentTurnDisplay = '';
let PlayerTurn = true;
let CurrentAlienIndex = 0;

let USSAssembly = new Ship();

let Aliens = [];

const SwitchTurn = () => {
    console.log('Switching Turns...');
    PlayerTurn = !PlayerTurn;
    if (PlayerTurn) {
        CurrentTurnDisplay = "Player's Turn!";
    } else {
        CurrentTurnDisplay = "Alien's Turn!";
    }
    currentTurn.innerHTML = CurrentTurnDisplay;
}

const animationCompletedLogic = {
    'player-ship': (element) => USSAssembly.OnAnimationCompleted(element, 'player-ship-attack-animation', () => {
        console.log('Current Alien Index: ' + CurrentAlienIndex);
        console.log('Alien Health before Attack: ' + Aliens[CurrentAlienIndex].currentHull);

        USSAssembly.DoDamage(Aliens[CurrentAlienIndex]);
        console.log('Alien Health after Attack: ' + Aliens[CurrentAlienIndex].currentHull);

        UpdateAlienStats();
        SwitchTurn();
        onAlienAttack();
    }),
    'alien-ship': (element) => Aliens[CurrentAlienIndex].OnAnimationCompleted(element, 'alien-ship-attack-animation', () => {
        Aliens[CurrentAlienIndex].DoDamage(USSAssembly);
        SwitchTurn();
        attackBtn.disabled = false;
    })
}
const onAnimationCompleted = (element) => {
    if (element.classList.contains('player-ship-attack-animation') ||
        element.classList.contains('alien-ship-attack-animation')) {
        let className = element.classList[0];
        animationCompletedLogic[className](element);
    }
}

const onPlayerAttack = () => {
    if (PlayerTurn) {
        USSAssembly.Animate(ship, 'player-ship-attack-animation');
        attackBtn.disabled = true;
    }
}
const onAlienAttack = () => {
    if (!PlayerTurn) {
        Aliens[CurrentAlienIndex].Animate(alienShips[CurrentAlienIndex], 'alien-ship-attack-animation');
    }
}
const onRetreat = () => {
    ship.classList.add('player-ship-retreat-animation');
}

const Init = () => {
    CurrentAlienIndex = 0;
    CurrentState = GameStates[2];
}
const UpdateAlienStats = () => {
    for (let i = 0; i < alienShips.length; i++) {
        let alienShipDiv = alienShips[i];
        let alienStats = Aliens[i];
        let currentHull = Math.trunc(alienStats.currentHull);
        let maxHull = Math.trunc(alienStats.maxHull);
        let firepower = Math.trunc(alienStats.firepower);
        let accuracy = Math.trunc(alienStats.accuracy * 100);

        alienShipDiv.innerHTML = alienStatsTemplate(currentHull, maxHull, firepower, accuracy);
    }
}

window.onload = function () {
    Init();

    for (let i = 0; i < 6; i++) {
        Aliens.push(new Alien('Alien' + i, 5, 1, 1));
    }
    UpdateAlienStats();
};