var display = '';
var nDigits = 0;
const maxDigits = 13;
var answer = '';

const operationReg = new RegExp('\d*[-+*\/]\d*')

const input = document.querySelector('.input');

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (nDigits < maxDigits) {
            display += number.innerText
            updateDisplay()
        }
    })
})

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