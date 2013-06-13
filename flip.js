window.addEventListener('load', windowLoadHandler, false);

var btn = document.querySelector('button');
var card = document.querySelector('.flip-card');

function windowLoadHandler() {
    addEventListeners();
}

function addEventListeners() {
    btn.addEventListener('click', flip, false);
}

function flip() {
    card.classList.toggle('flip');
}