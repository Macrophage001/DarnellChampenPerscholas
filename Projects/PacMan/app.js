const pacMan = document.querySelector('.pac-man');

let velocity = 1;

// Just stored all the function logic for each direction inside of a Javascript Object so I can reference them later.
const positionLogic = {
    'up': (currPos) => {
        pacMan.style.top = `${currPos[1] - velocity}px`;
        pacMan.classList.add('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.remove('face-right');
    },
    'down': (currPos) => {
        pacMan.style.top = `${currPos[1] + velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.add('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.remove('face-right');
    },
    'left': (currPos) => {
        pacMan.style.left = `${currPos[0] - velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.add('face-left');
        pacMan.classList.remove('face-right');
    },
    'right': (currPos) => {
        pacMan.style.left = `${currPos[0] + velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.add('face-right');
    }
}

// In order for the pac man movement to be correct, you need to have timeouts so that when the button is pressed, 
// the movement logic can continue to run at a certain interval.
const timeouts = [];
const clearTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
}

// In order for the pac-man to update it's position accordingly, I need to know where it currently is on the screen (x = left, y = top).
const currentPosition = () => ([pacMan.getBoundingClientRect().left, pacMan.getBoundingClientRect().top]);

// Once the use presses a movement button, continue to perform that movement button's logic.
const onBtnDown = (action, interval) => {
    var t;
    var repeat = function() {
        action();
        t = setTimeout(repeat, interval)
        timeouts.push(t);
    }
    repeat();
}

// the main function that controls what happens when you press a movement button.
const updatePosition = (element) => {
    clearTimeouts();

    let className = element.className;
    let movementFunc = positionLogic[className];
    onBtnDown(() => {
        let currPos = currentPosition();
        movementFunc(currPos)
    }, 10);
    // movementFunc(currPos);
}