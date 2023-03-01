'use strict';

/********
 * Functions
 * ******
 */

/*
* Somma numeri
* num1: il primo numero da sommare
* num2: il secondo numero da sommare (con valore di default = 0)
*/
function sommaNumeri(num1, num2 = 0) {
    return num1 + num2;
}

/*
* Edit HTML - no arguments
*/
function editHTML(){
    document.querySelector('h1').innerHTML = 'Ciao';
}

/*
* Edit HTML - arguments
* element: è un elemento html che vado a modificare
* text: testo che vado a inserire nell'elemento html
*/
function editHTML(element, text){
    document.querySelector(element).innerHTML = text;
}
/*
* 
* console log personalizzato
* text: valore da stampare in console
*/
function myConsoleLog(text){
    console.log('INIZIO LOG');
    console.log({text});
    console.log('FINE LOG');
}


/********
 * MAIN
 * ******
 */


// const x = prompt('Inserisci un numero');
// const y = prompt('Inserisci un numero');

const risultato1 = sommaNumeri(2, 4); //6
const risultato2 = sommaNumeri(5, 3); //8

const risultatoTotale = sommaNumeri(risultato1, risultato2); //14

// myConsoleLog(risultatoTotale);

 editHTML('h1', risultatoTotale);

// sommaNumeri(1,2);

// editHTML('h1', 'Nuovo Testo');
// editHTML('h2', 'Nuovo testo H2');

// const risultato1 = sommaNumeri(2, 4); //6
// // const somma = sommaNumeri(2,4);
// console.log(sommaNumeri(2, 4));
// console.log(somma);


