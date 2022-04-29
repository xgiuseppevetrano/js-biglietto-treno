// 1. Chiedo all'utente il numero di chilometri che vuole percorrere
const kilometers = Number(prompt("Quanti chilometri vuoi percorrere?"));

// 2. Chiedo all'utente l'età del passegero
const age = Number(prompt("Quanti anni ha il passeggero?"));

// 3. Calcolo il prezzo totale del viaggio, sapendo che:
//     - il prezzo del biglietto è definito in base ai km (0.21€ al km)
//     - va applicato uno sconto del 20% per i minorenni
//     - va applicato uno sconto del 40% per gli over 65
//     - l'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
let ticketPrice = (kilometers * 0.21);

if ( age < 18 ) {
    ticketPrice = (ticketPrice * 0.8);
} else if ( age >= 65 ) {
    ticketPrice = (ticketPrice * 0.6);
} 

console.log(ticketPrice.toFixed(2));
document.getElementById('ticket-price').innerHTML = `${ticketPrice.toFixed(2)} €`;