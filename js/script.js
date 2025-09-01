// Dichiarazione delle variabili

let btn_fizzBuzz = document.getElementById('btn-fizzBuzz'); // Bottone


let grid_container = document.getElementById('grid-container') // Contenitore della griglia


let gridfizzBuzz = document.getElementById('gridFizzBuzz') // Griglia FizzBuzz


// Debugging

console.log(btn_fizzBuzz, grid_container, gridfizzBuzz);


// Gestione evento start

btn_fizzBuzz.addEventListener('click', function () {

    for (let i = 1; i <= 100; i++) { // Ciclo for con 100 iterazioni

        let squares = document.createElement('div'); // Creazione dinamica elemento (div)

        squares.innerHTML = `${i}`;

        console.log(squares);

    };

});