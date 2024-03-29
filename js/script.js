/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

// creazione griglia con i numeri da 1 a 100
const gridElement = document.querySelector("#grid");

for (let i = 1; i <= 100; i++) {

    // creo un elemento html
    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;

    // controllo che il numero sia divisibile per 3
    if (i % 3 == 0) {
        //controllo che il numero sia divisibile ANCHE per 5
        if (i % 5 == 0) {
            // stampo "fizzbuzz" al posto di i
            newElement.innerHTML = "fizzbuzz";

            // inserisco la classe "fizzbuzz"
            newElement.className += " fizzbuzz";

        }
        else {
            // stampo "fizz" al posto di i"
            newElement.innerHTML = "fizz";

            // inserisco la classe "fizz"
            newElement.className += " fizz";
        }

    }
    // controllo che il numero sia divisibile per 5
    else if (i % 5 == 0) {
        // stampo "buzz" al posto di i
        newElement.innerHTML = "buzz";

        // inserisco la classe "buzz"
        newElement.className += " buzz";
    }

    else {
        newElement.innerHTML = i;
    }

    // "appendo" l'elemento creato alla griglia
    gridElement.append(newElement);

}