// Dichiarazione delle variabili

let btn_fizzBuzz = document.getElementById('btn-fizzBuzz-start'); // Bottone Start


let grid_container = document.getElementById('grid-container') // Contenitore della griglia


let gridfizzBuzz = document.getElementById('gridFizzBuzz') // Griglia FizzBuzz


// Debugging

console.log(btn_fizzBuzz, grid_container, gridfizzBuzz);





// Gestione evento start

btn_fizzBuzz.addEventListener('click', function () {

    // Stile al contenitore

    grid_container.style.padding = '10px';

    grid_container.style.backgroundColor = 'cadetblue';



    gridfizzBuzz.innerHTML = ''; // Reset preventivo della lista


    for (let i = 1; i <= 100; i++) { // Ciclo for con 100 iterazioni


        let squares = document.createElement('div'); // Creazione dinamica elemento (div)


        gridfizzBuzz.appendChild(squares); // Appendo gli elementi creati alla griglia


        squares.classList.add('square'); // classe css (layout) agli elementi creati


        if (i % 3 === 0 && i % 5 === 0) { // Condizione multipli di 3 e 5 (FizzBuzz)


            squares.innerHTML = `FizzBuzz`; // Contenuto

            squares.classList.add('bg-lightgreen'); // (style) css


        } else if (i % 3 === 0) { // Solo multipli di 3 (Fizz)


            squares.innerHTML = `Fizz`; // Contenuto

            squares.classList.add('bg-darkgray'); // (style) css


        } else if (i % 5 === 0) { // Solo multipli di 5 (Buzz)


            squares.innerHTML = `Buzz`; // Contenuto

            squares.classList.add('bg-burlywood') // (style) css


        } else { // Altrimenti mostro il numero (valore corrente variabile contatore)


            squares.innerHTML = `${i}`; // Contenuto

            squares.classList.add('bg-white'); // (style) css

        };
    };
});