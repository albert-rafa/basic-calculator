var display = '';
var answer = '';

const operationReg = new RegExp('\d*[-+*\/]\d*')
var operationFlag = true

const input = document.querySelector('.input');

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        // BUG HERE
        if (operationFlag && isEquation(answer)) {
            operationFlag = false
            clearDisplay()
        }
        display += number.innerText
        updateDisplay()
    })
})

document.querySelector('#float').addEventListener('click', () => {
    if (!isFloat(display)) {
        display += '.'
        updateDisplay()
    }
})

const operators = document.querySelectorAll('.operation')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operationFlag = true
        if (isEquation(answer)) {
            answer += display
            answer = calculation().toString()
            input.innerText = answer
            answer += operator.innerText
        } else {
            answer = display + operator.innerText
            clearDisplay()
        }
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