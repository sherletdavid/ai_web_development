function calculate(operation) {
    const num1Str = document.getElementById('num1').value;
    const num2Str = document.getElementById('num2').value;
    const resultInput = document.getElementById('result');

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
        resultInput.value = 'Invalid Input';
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultInput.value = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultInput.value = 'Unknown operation';
            return;
    }

    resultInput.value = result;
}

function clearInputs() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
}