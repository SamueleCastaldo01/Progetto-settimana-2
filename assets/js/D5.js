//in questo caso ho utilizzato stesso il file index.html per visualizzare i console dato che non è presente nessun omportamento all'intero della pagina
//premessa non metto i punti e virgola alla fine della riga perché in javascript non è obbligario

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log("Esercizio1-------------")
for(let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(" ")
console.log("Esercizio2-------------")

pets.sort()
console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(" ")
console.log("Esercizio3-------------")

pets.reverse()
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(" ")
console.log("Esercizio4-------------")

pets.push(pets[0])   //vado prima ad inserire il primo elemento alla fine
pets.shift()         // vado ad eliminare il primo elemento
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log(" ")
console.log("Esercizio5-------------")

for(let i = 0; i < cars.length; i++) {    //in modo dinamico, farà una concatenazione con l'indice, Avrei potuto usare anche un random
  cars[i].licensePlate = 'PLATE' + i.toString()    //metodo toString in questo caso converte un numero in una stringa. 
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log(" ")
console.log("Esercizio6-------------")

let carFiat = {
  brand: 'Fiat',
  model: '500X',
  color: 'blue',
  trims: ['titanium', 'st', 'active'],
  licensePlate: 'PLATE5'
}

cars.push(carFiat)   //aggiunge l'oggetto di sopra, nell'array di oggetti all'ultima posizione.
console.log(cars)

for(let i = 0; i < cars.length; i++) { 
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(" ")
console.log("Esercizio7-------------")

const justTrims = []
for(let i = 0; i < cars.length; i++) { 
  justTrims[i] = cars[i].trims[0]
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(" ")
console.log("Esercizio8-------------")

for(let i = 0; i < cars.length; i++) { 
  if(cars[i].color.charAt(0) === 'b') {
    console.log(cars[i].brand + " " + cars[i].model + " " + cars[i].color + " Fizz")
  } else {
    console.log(cars[i].brand + " " + cars[i].model + " " + cars[i].color + " Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log(" ")
console.log("Esercizio9-------------")
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while (i < numericArray.length) {
    if (numericArray[i] !== 32) {
      console.log(numericArray[i]);
      i++;
    } else {
      console.log(numericArray[i]); // 32 incluso
      break;          //esce dal ciclo while
    }
  }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log(" ")
console.log("Esercizio10-------------")
const charactersArray = ['g', 'n', 'u', 'z', 'd'];    //non ho considerato che i caratteri possono essere anche in maiuscolo
const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
    switch (charactersArray[i]) {
        case 'a':
            positionArray.push(1);
            break;
        case 'b':
            positionArray.push(2);
            break;
        case 'c':
            positionArray.push(3);
            break;
        case 'd':
            positionArray.push(4);
            break;
        case 'e':
            positionArray.push(5);
            break;
        case 'f':
            positionArray.push(6);
            break;
        case 'g':
            positionArray.push(7);
            break;
        case 'h':
            positionArray.push(8);
            break;
        case 'i':
            positionArray.push(9);
            break;
        case 'j':
            positionArray.push(10);
            break;
        case 'k':
            positionArray.push(11);
            break;
        case 'l':
            positionArray.push(12);
            break;
        case 'm':
            positionArray.push(13);
            break;
        case 'n':
            positionArray.push(14);
            break;
        case 'o':
            positionArray.push(15);
            break;
        case 'p':
            positionArray.push(16);
            break;
        case 'q':
            positionArray.push(17);
            break;
        case 'r':
            positionArray.push(18);
            break;
        case 's':
            positionArray.push(19);
            break;
        case 't':
            positionArray.push(20);
            break;
        case 'u':
            positionArray.push(21);
            break;
        case 'v':
            positionArray.push(22);
            break;
        case 'w':
            positionArray.push(23);
            break;
        case 'x':
            positionArray.push(24);
            break;
        case 'y':
            positionArray.push(25);
            break;
        case 'z':
            positionArray.push(26);
            break;
        default:
            console.log("Il carattere" + charactersArray[i] +  "non è una lettera dell'alfabeto italiano.");
            break;
    }
}

console.log(positionArray);

