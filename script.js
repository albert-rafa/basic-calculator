var display = '';
var answer = '';

const numberReg = new RegExp('[0-9]')
const operationReg = new RegExp('\d*[-+*\/]\d*')
var operationFlag = true

const input = document.querySelector('.input');

const page = document.body
page.addEventListener('keydown', event => {
    if (event.key.match(numberReg)) {
        numberInput(event.key)
        return
    }
    if (event.key.match(operationReg)) {
        operatorInput(event.key)
        return
    }
    if (event.key === 'Enter' || event.key === '=') {
        equalInput()
        return
    }
    if (event.key === 'Delete' || event.key === 'Backspace') {
        clearInput()
        return
    }
})

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        numberInput(number.innerText)
    })
})
function numberInput(number) {
    if (operationFlag && isEquation(answer)) {
        operationFlag = false
        clearDisplay()
    }
    display += number
    updateDisplay()
}

document.querySelector('#float').addEventListener('click', () => {
    if (!isFloat(display)) {
        display += '.'
        updateDisplay()
    }
})

const operators = document.querySelectorAll('.operation')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorInput(operator.innerText)
    })
})
function operatorInput(operator) {
    operationFlag = true
        if (isEquation(answer)) {
            answer += display
            answer = calculation().toString()
            input.innerText = answer
            answer += operator
        } else {
            answer = display + operator
            clearDisplay()
        }
}

document.querySelector('#equals').addEventListener('click', () => {
    equalInput()
})
function equalInput() {
    if (isEquation(answer)) {
        answer += display
        answer = calculation().toString()
        input.innerText = answer
        display = answer
    }
}

document.querySelector('#clear').addEventListener('click', () => {
    clearInput()
})
function clearInput() {
    clearDisplay()
    answer = ''
}

function updateDisplay() {
    input.innerText = display
}
function clearDisplay() {
    display = ''
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