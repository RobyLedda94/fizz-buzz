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

        gridfizzBuzz.appendChild(squares); // Appendo gli elementi creati alla griglia

        squares.classList.add('square'); // classe css agli elementi creati

        if (i % 3 === 0 && i % 5 === 0) {

            squares.innerHTML = `FizzBuzz`;

        } else if (i % 3 === 0) {

            squares.innerHTML = `Fizz`;

        } else if (i % 5 === 0) {

            squares.innerHTML = `Buzz`;

        } else {

            squares.innerHTML = `${i}`;
        };

    };

});