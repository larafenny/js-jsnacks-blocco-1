/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. (questo potrebbe richiedere un minimo di ricerca)*/

// Controllo collegamento tra index e script
console.log('script ok, JNASCK3');

// Creo variabile con numero dato dall'utente
let numero=parseInt(prompt('inserisci un numero di 4 cifre'));
let somma=0;

// ciclo che somma le ciifre del numero inserito dall'utente
while(numero){
    somma += numero % 10;
    numero =Math.floor(numero / 10);
}
console.log(somma);