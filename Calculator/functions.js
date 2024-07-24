let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let expression = displayValue.replace(/%/g, '*0.01');
        let result = new Function('return ' + expression)();
        
        displayValue = parseFloat(result.toFixed(8)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}