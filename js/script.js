// 1. Chiedo all'utente il numero di chilometri che vuole percorrere
const kilometers = Number(prompt("Quanti chilometri vuoi percorrere?"));

// 2. Chiedo all'utente l'età del passegero
const age = Number(prompt("Quanti anni ha il passeggero?"));

// 3. Calcolo il prezzo totale del viaggio, sapendo che:
//     - il prezzo del biglietto è definito in base ai km (0.21€ al km)
//     - va applicato uno sconto del 20% per i minorenni
//     - va applicato uno sconto del 40% per gli over 65
//     - l'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
const ticketPrice = Number(kilometers * 0.21);
const ticketPriceUnder18 = Number(ticketPrice * 0.2);
const ticketPriceOver65 = Number(ticketPrice * 0.4);

if ( age < 18 ) {
    console.log(ticketPriceUnder18.toFixed(2));
} else if ( age >= 65 ) {
    console.log(ticketPriceOver65.toFixed(2));
} else {
    console.log(ticketPrice.toFixed(2));
}