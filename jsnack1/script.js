/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

// Controllo collegamento tra index e script
console.log('script ok, JNASCK1');

// Creo array  contenente lista invitati
let listaInvitatiFesta = ['Rossi', 'Verdi', 'Neri', 'Blu', 'Bianchi'];

//Tramite prompt chiedo nome all'utente e verifiico se fa parte dellla llista, sennò chiedo di inserirne un altro
let permesso = false;


while(!permesso){
    let nomePersona = prompt('Inserisci il tuo nome');
    for (let i=0; i<listaInvitatiFesta.length; i++){
        if (nomePersona === listaInvitatiFesta[i]){
            console.log('Evvai!! Sei invitato alla festa del grande Gatsby');
    }
    /*}else{
        console.log('Mi spiace ma non sei invitato!');
    }*/
}