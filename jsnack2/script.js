/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/

// Controllo collegamento tra index e script
console.log('script ok, JNASCK2');

// Creo array vuoto
let arrayDispari=[];

// Creo ciclo for che chieda per 6 vollte un numero all'utente
for(let i=0; i<5; i++){
    let numero=prompt('inserisci un numero');
    // Determino se il numero è pari
    if(numero % 2 != 0){
        arrayDispari.push(numero);
        console.log(arrayDispari);
    }
}