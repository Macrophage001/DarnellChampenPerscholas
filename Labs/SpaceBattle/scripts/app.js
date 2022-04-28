let USSAssembly = {
    health: 3,
    damage: 1,

    shoot: function (alien) {
        alien.health -= this.damage;
    }
}

let AlienShip = {
    health: 1,
    damage: 1,

    shoot: function () {
        USSAssembly.health -= this.damage;
    }
}

// 0 = Player, 1 = Alien.
let CurrentTurnDisplay = '';
let PlayerTurn = true;
let CurrentAlienIndex = 0;

let Aliens = [];

const SwitchTurn = () => {
    PlayerTurn = !PlayerTurn;
    if (PlayerTurn)
        CurrentTurnDisplay = "Player's Turn!";
    else
        CurrentTurnDisplay = "Alien's Turn!";
}
const Battle = (player, alien) => {
    if (PlayerTurn) {
        player.shoot(alien);

        if (alien.health > 0)
            SwitchTurn();
    }
    else if (CurrentTurn === 1) {
        alien.shoot(player);
        if (player.health > 0)
            SwitchTurn();
    }
}