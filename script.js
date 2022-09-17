var res = '';
var nDigits = 0;
const maxDigits = 13;

const input = document.querySelector('.input');

document.querySelector('#zero').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '0'
        updateDisplay()
    }
})
document.querySelector('#one').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '1'
        updateDisplay()
    }
})
document.querySelector('#two').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '2'
        updateDisplay()
    }
})
document.querySelector('#three').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '3'
        updateDisplay()
    }
})
document.querySelector('#four').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '4'
        updateDisplay()
    }
})
document.querySelector('#five').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '5'
        updateDisplay()
    }
})
document.querySelector('#six').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '6'
        updateDisplay()
    }
})
document.querySelector('#seven').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '7'
        updateDisplay()
    }
})
document.querySelector('#eight').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '8'
        updateDisplay()
    }
})
document.querySelector('#nine').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        res += '9'
        updateDisplay()
    }
})
document.querySelector('#float').addEventListener('click', () => {
    if (( nDigits < maxDigits ) && ( !isFloat(res) )) {
        res += '.'
        updateDisplay()
    }
})

function updateDisplay() {
    nDigits++
    input.innerText = res
}

function isFloat(str) {
    const reg = new RegExp('[.]', 'g')
    if (str.match(reg)) { return true }
    return false
}