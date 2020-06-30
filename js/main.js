'use strict';

//Obtain random number
function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
}

let rndm = getRandomNumber (100);

console.log('Mi número aleatorio es ' + rndm);

//Constants
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const clue = document.querySelector('.clue');
const counter = document.querySelector('.counter');



//Function checkout
function checkout () {
    if (input.value.lenght !== 0) { validation(input.value);
        if (validation(input.value) === true) {
            if (input === rndm) {
                printMessage(`Has ganado campeona!!!`);
            }
            else if (input < rndm) {
                printMessage(`Demasiado bajo`);
            }
            else if (input > rndm) {
                printMessage(`Demasiado alto`)
            }
        }
        else {
            printMessage(`El número debe estar entre 1 y 100`)
        }
    }
}

//Function validation
function validation (number) {
    if (0 <= number <= 100 ) {
        return true;
    }
    else {
        return false;
    }
}

//Function printMessage
function printMessage (obj) {
    clue.innerHTML = obj.clue || `Escribe un número y dale a Prueba`;
    counter.innerHTML = obj.counter || `Número de intentos: 0`;
}

input.addEventListener('keyup');