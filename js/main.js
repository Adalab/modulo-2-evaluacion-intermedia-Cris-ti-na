'use strict';

//Contador a 0
let count = 0;

//Obtener número aleatorio
function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
}

let rndm = getRandomNumber (100);

console.log('Mi número aleatorio es ' + rndm);

//Señalamos el formulario
const form = document.querySelector('#form');

//Indicamos los distintos tipos de pistas
const clue = document.querySelector('#clue');
const clueList = {
    valid_number: 'Has ganado campeona!!!',
    invalid_number: 'El número debe estar entre 1 y 100.',
    too_high: 'Demasiado alto.',
    too_low: 'Demasiado bajo.',
};

form.addEventListener ('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    //Recogemos el dato del input y revisamos si es válido
    const input = document.querySelector('#form-input');
    const inputValue = input.value;
    //console.log(validateInput(inputValue));
    if (validateInput(input.value)) {
        updateCounter();
        if (inputValue == rndm) {
            updateClue (clueList.valid_number);
        }
        if (inputValue < rndm) {
           updateClue (clueList.too_low);
        }
        if (inputValue > rndm) {
           updateClue (clueList.too_high);
        }
    }
    else {
        updateClue (clueList.invalid_number);
    }
};

function validateInput (value) {
    return (value >=1) && (value <= 100)
};

function updateClue (clueText) {
    clue.innerHTML = clueText;
};

function updateCounter () {
    count = count + 1;
    const counter = document.querySelector('#counter');
    counter.innerHTML = `Número de intentos: ${count}`;
};