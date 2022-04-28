const ship = document.querySelector('.player-ship');
const shipHealth = document.querySelector('.player-ship::after');
const alienShips = document.getElementsByClassName('alien-ship');

const attackBtn = document.getElementById('attack-btn');
const retreatBtn = document.getElementById('retreat-btn');

const currentTurn = document.getElementById('current-turn');

const range = (min, max) => Math.random() * (max - min) + min;

class ICombat {
    DoDamage(target) {
        if (target.currentHealth > 0) {
            let chance = Math.random();
            if (chance <= this.accuracy) {
                target.currentHealth -= this.firepower;
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
}
class USSAssembly extends ICombat {
    constructor() {
        this.name = 'USS Assembly';
        this.maxHull = 20;
        this.currentHull = this.maxHull;
        this.firepower = 5;
    }
}

class Alien  extends ICombat {
    constructor(name) {
        this.name = name;
        this.maxHull = range(3, 6);
        this.currenHull = this.maxHull;
        this.firepower = range(2, 4);
        this.accuracy = range(.6, .8);
    }
}


// 0 = Player, 1 = Alien.
let CurrentTurnDisplay = '';
let PlayerTurn = true;
let CurrentAlienIndex = 0;

let Aliens = [];

const SwitchTurn = () => {
    console.log('Switching Turns...')
    PlayerTurn = !PlayerTurn;
    if (PlayerTurn) {
        CurrentTurnDisplay = "Player's Turn!";
    } else {
        CurrentTurnDisplay = "Alien's Turn!";
    }
    currentTurn.innerHTML = CurrentTurnDisplay;
}

const updateHealth = (element) => {
    //TODO: Update the health bars.
}

const animationCompletedLogic = {
    'player-ship': () => {
        ship.classList.remove('player-ship-attack-animation');
        

        DoDamage(USSAssembly, Aliens[CurrentAlienIndex]);
        SwitchTurn();
        AlienAttack();
    },
    'alien-ship': () => {
        let alienShip = alienShips[CurrentAlienIndex];
        alienShip.classList.remove('alien-ship-attack-animation');
        
        Aliens[CurrentAlienIndex].DoDamage(USSAssembly);
        // DoDamage(Aliens[CurrentAlienIndex], USSAssembly);
        SwitchTurn();
        attackBtn.disabled = false;
    }
}
const onAnimationCompleted = (element) => {
    let className = element.classList[0];
    animationCompletedLogic[className]();
}

const PlayerAttack = () => {
    if (PlayerTurn) {
        ship.classList.add('player-ship-attack-animation');
        attackBtn.disabled = true;
    }
}
const AlienAttack = () => {
    if (!PlayerTurn) {
        alienShips[CurrentAlienIndex].classList.add('alien-ship-attack-animation');
    }
}

window.onload = function () {


    for (let i = 0; i < 6; i++) {
        Aliens.push(new Alien('Alien' + i, 5, 1, 1));
    }
};