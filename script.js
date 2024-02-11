const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');
console.log(subhanAllahDisplay);

let subhanAllahInitialvalue = 0;
let alhamdulillahInitialvalue = 0;
let allahAkberDisplayInitialvalue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialvalue >= 33) {
        return alert('Subhan Allah is Complete');
    }
    subhanAllahInitialvalue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialvalue;
})

subhanAllahDecrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialvalue <= 0) {
        return alert('You cannot decriment below');
    }
    subhanAllahInitialvalue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialvalue;
})

alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialvalue >= 33) {
        return alert('Subhan Allah is Complete');
    }
    alhamdulillahInitialvalue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialvalue;
})

alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialvalue <= 0) {
        return alert('You cannot decriment below');
    }
    alhamdulillahInitialvalue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialvalue;
})

allahAkberIncrimentBtn.addEventListener('click', function () {
    if (allahAkberDisplayInitialvalue >= 33) {
        return alert('allahAkber is Complete');
    }

    allahAkberDisplayInitialvalue += 1;

    allahAkberDisplay.innerText = allahAkberDisplayInitialvalue;
})

allahAkberDecrimentBtn.addEventListener('click', function () {
    if (allahAkberDisplayInitialvalue <= 0) {
        return alert('You cannot decriment below');
    }

    allahAkberDisplayInitialvalue -= 1;

    allahAkberDisplay.innerText = allahAkberDisplayInitialvalue;
})


resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahInitialvalue = 0;
    alhamdulillahInitialvalue = 0;
    allahAkberDisplayInitialvalue = 0;

});
