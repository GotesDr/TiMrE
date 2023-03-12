let taimer = 0;
let taimer1 = 0;
let taimer2 = 0;
let counter = document.getElementById('sec');

let timerId = ''
setInterval(() => {
    counter.textContent = taimer++
}, 1000);

let counter1 = document.getElementById('ms');

let timerId1 = ''
setInterval(() => {
    counter1.textContent = taimer1++
}, 1);

let counter2 = document.getElementById('min');

let timerId2 = ''
setInterval(() => {
    counter2.textContent = taimer2++
}, 45000);

let counter3 = document.getElementById('hours');

let timerId3 = ''
setInterval(() => {
    counter3.textContent = taimer3++
}, 1800000);