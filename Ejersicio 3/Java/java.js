// Sumar números positivos
let sum = 0;

function addPositiveNumber() {
    let number = parseFloat(document.getElementById('positiveNumberInput').value);
    if (number > 0) {
        sum += number;
        document.getElementById('positiveNumberResult').textContent = `Suma Total: ${sum}`;
    } else {
        alert('Número no positivo ingresado. Terminando suma.');
        document.getElementById('positiveNumberResult').textContent = `Suma Final: ${sum}`;
    }
    document.getElementById('positiveNumberInput').value = '';
}

// Ordenar números de mayor a menor
function sortNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);
    
    document.getElementById('sortedNumbersResult').textContent = `Orden: ${numbers.join(', ')}`;
}

// Calcular importe neto
function calculateNetAmount() {
    let grossAmount = parseFloat(document.getElementById('grossAmount').value);
    let netAmount;

    if (grossAmount > 15000) {
        netAmount = grossAmount * 0.84;
    } else {
        netAmount = grossAmount * 0.90;
    }

    document.getElementById('netAmountResult').textContent = `Importe Neto: ${netAmount.toFixed(2)} EUR`;
}

// Calcular sueldo según años trabajados
function calculateSalary() {
    let yearsWorked = parseFloat(document.getElementById('yearsWorked').value);
    let baseSalary = 40000;
    let finalSalary;

    if (yearsWorked > 10) {
        finalSalary = baseSalary * 1.10;
    } else if (yearsWorked > 5) {
        finalSalary = baseSalary * 1.07;
    } else if (yearsWorked > 3) {
        finalSalary = baseSalary * 1.05;
    } else {
        finalSalary = baseSalary * 1.03;
    }

    document.getElementById('salaryResult').textContent = `Sueldo Final: ${finalSalary.toFixed(2)} EUR`;
}
