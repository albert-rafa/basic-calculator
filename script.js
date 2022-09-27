var display = '';
var nDigits = 0;
const maxDigits = 13;
var answer = '';

const operationReg = new RegExp('\d*[-+*\/]\d*')

const input = document.querySelector('.input');

// NUMBERS ------------------------------------------------------------
document.querySelector('#zero').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '0'
        updateDisplay()
    }
})
document.querySelector('#one').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '1'
        updateDisplay()
    }
})
document.querySelector('#two').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '2'
        updateDisplay()
    }
})
document.querySelector('#three').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '3'
        updateDisplay()
    }
})
document.querySelector('#four').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '4'
        updateDisplay()
    }
})
document.querySelector('#five').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '5'
        updateDisplay()
    }
})
document.querySelector('#six').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '6'
        updateDisplay()
    }
})
document.querySelector('#seven').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '7'
        updateDisplay()
    }
})
document.querySelector('#eight').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '8'
        updateDisplay()
    }
})
document.querySelector('#nine').addEventListener('click', () => {
    if (nDigits < maxDigits) {
        display += '9'
        updateDisplay()
    }
})
document.querySelector('#float').addEventListener('click', () => {
    if (( nDigits < maxDigits ) && ( !isFloat(display) )) {
        display += '.'
        updateDisplay()
    }
})
// --------------------------------------------------------------------

// OPERATIONS ----------------------------------------------------------
document.querySelector('#sum').addEventListener('click', () => {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString() + '+'
        clearDisplay()
    } else {
        answer = display + '+'
        clearDisplay()
    }

    console.log(answer)
})
document.querySelector('#minus').addEventListener('click', () => {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString() + '-'
        clearDisplay()
    } else {
        answer = display + '-'
        clearDisplay()
    }

    console.log(answer)
})
document.querySelector('#times').addEventListener('click', () => {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString() + '*'
        clearDisplay()
    } else {
        answer = display + '*'
        clearDisplay()
    }

    console.log(answer)
})
document.querySelector('#devide').addEventListener('click', () => {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString() + '/'
        clearDisplay()
    } else {
        answer = display + '/'
        clearDisplay()
    }

    console.log(answer)
})

document.querySelector('#equals').addEventListener('click', () => {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString()
        input.innerText = answer
        display = answer
    }

    console.log(answer)
})

document.querySelector('#clear').addEventListener('click', () => {
    clearDisplay()
    answer = ''
})
// -----------------------------------------------------------------------------

function updateDisplay() {
    nDigits++
    input.innerText = display
}
function clearDisplay() {
    display = ''
    nDigits = 0
    input.innerText = ''
}

function isFloat(str) {
    const reg = new RegExp('[.]', 'g')
    if (str.match(reg)) { return true }
    return false
}

function isEquation(str) {
    if (str.match(operationReg)) { return true }
    return false
}

function calculation() {
    const numbers = answer.split(operationReg)

    if(answer.includes('+')) {
        return ((parseFloat(numbers[0])) + (parseFloat(numbers[1])))
    }
    if(answer.includes('-')) {
        return ((parseFloat(numbers[0])) - (parseFloat(numbers[1])))
    }
    if(answer.includes('*')) {
        return ((parseFloat(numbers[0])) * (parseFloat(numbers[1])))
    }
    if(answer.includes('/')) {
        return ((parseFloat(numbers[0])) / (parseFloat(numbers[1])))
    }
}