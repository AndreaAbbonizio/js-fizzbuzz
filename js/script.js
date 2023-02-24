// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” 
// al posto del numero e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


/*
-creare variabile per dive genitore
-creare un ciclo for
-creare elementi nel ciclo for
-aggiungere gli  elementi creati al div genitore(append)
    ?SE i numeri sono divisibili per 3, stampare in console "fizz"
    :?ALTRIMENTI SE i numeri sono divisibili per 5, stampare in console "Buzz"
    :? ALTRIMENTI SE i numeri sono sia divisibili per 3 e(&&) 5 stampare in console "Fizzabuz"
    :ALTRIMENTI stampare in console numero


*/


//variabile div genitore
let containerNumberEl = document.getElementById("containerNumber");

for(i= 1; i <= 100; i++){
    //crezione div  figlio del div genitore(containerNumberEl) e  memorizzazione
    let newEl = document.createElement("div");
    //aggiunta figli div al genitore(containerNumberEl)
    containerNumberEl.append(newEl);
    //assegnazione valore a variabile del div figlio
    newEl = i ;
    
    
    if(i % 3 == 0  && i % 5 == 0){
        newEl = "FizzBuzz" ;
        console.log(newEl);
    }else if(i % 5 == 0){
        newEl = "Buzz";
        console.log(newEl);
    }else if(i % 3 == 0) {
        newEl = "Fizz" ;
        console.log(newEl);
    } else {
        console.log(newEl);
    }
}