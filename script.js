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

const operators = document.querySelectorAll('.operation')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (isEquation(answer)) {
            answer += display
            answer = calculation().toString() + operator.innerText
            clearDisplay()
        } else {
            answer = display + operator.innerText
            clearDisplay()
        }

        console.log(answer)
    })
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