'use strict';
//Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
//ANDIAMO A PRENDERE DALL HTML LA CLASSE CHE CI SERVE
const numButton = document.querySelectorAll('.numbers-selector');
let result = document.getElementById('result');
// console.log(numButton);
let addNumb = '';
let printNumb = '';
//RICHIAMO DELLA FUNZIONE PER I NUMERI
addNumbers();





//aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
const operatorButton = document.querySelectorAll('.operators-button')
let addOper = '';
let printOper = '';
addOperator();



function addNumbers() {
    for (let i = 0; i < numButton.length; i++) {
        console.log(numButton[i].innerHTML);

        numButton[i].addEventListener('click', function () {
            addNumb = numButton[i].innerHTML;
            printNumb += addNumb;
            result.innerHTML = printNumb + printOper;
        });
    }
}
function addOperator() {
    for (let i = 0; i < operatorButton.length; i++) {
        operatorButton[i].addEventListener('click', function () {
            addOper = operatorButton[i].innerHTML;
            printOper += addOper;
            result.innerHTML = printOper;

        })
    }
}