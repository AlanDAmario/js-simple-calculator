'use strict';
//CREIAMO UN EVENTLISTENER PER I BOTTONI
const clickButton = document.querySelectorAll('.numbers-selector');
let result = document.getElementById('result');
let addNumb = '';
let printNumb = '';
addNumbers();



function addNumbers() {
    for (let i = 0; i < clickButton.length; i++) {
        // console.log(clickButton[i].innerHTML);
        clickButton[i].addEventListener('click', function () {
            addNumb = clickButton[i].innerHTML;
            printNumb = printNumb + addNumb;
            result.innerHTML = printNumb;
        });
    }
}