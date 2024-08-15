// 1. Suma de todos los números impares del 1 al 100
function sumOddNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    document.getElementById('oddSumResult').textContent = `Suma de números impares: ${sum}`;
}

// 2. Mostrar un número de asteriscos igual al número ingresado
function showAsterisks() {
    let num = parseInt(document.getElementById('asteriskInput').value);
    let asterisks = '';
    for (let i = 0; i < num; i++) {
        asterisks += '*';
    }
    document.getElementById('asteriskResult').textContent = asterisks;
}

// 3. Escribir las tablas de multiplicar del 1 al 10
function multiplicationTables() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result += `${i} x ${j} = ${i * j}\n`;
        }
        result += '\n';
    }
    document.getElementById('multiplicationResult').textContent = result;
}

// 4. Funciones de Arreglos
function arrayFunctions() {
    let arr = [1, 2, 3, 4, 5];
    let result = `Arreglo inicial: ${arr.join(', ')}\n`;

    // Pop
    arr.pop();
    result += `Después de pop(): ${arr.join(', ')}\n`;

    // Shift
    arr.shift();
    result += `Después de shift(): ${arr.join(', ')}\n`;

    // Unshift
    arr.unshift(0);
    result += `Después de unshift(0): ${arr.join(', ')}\n`;

    // Push
    arr.push(6);
    result += `Después de push(6): ${arr.join(', ')}\n`;

    // Splice
    arr.splice(2, 0, 99);
    result += `Después de splice(2, 0, 99): ${arr.join(', ')}\n`;

    // Delete
    delete arr[3];
    result += `Después de delete arr[3]: ${arr.join(', ')}\n`;

    // Reverse
    arr.reverse();
    result += `Después de reverse(): ${arr.join(', ')}\n`;

    // Sort
    arr.sort();
    result += `Después de sort(): ${arr.join(', ')}\n`;

    // Concat
    let newArr = arr.concat([10, 20, 30]);
    result += `Después de concat([10, 20, 30]): ${newArr.join(', ')}\n`;

    // Join
    let joined = newArr.join(' - ');
    result += `Después de join(' - '): ${joined}\n`;

    // Length
    result += `Longitud del arreglo: ${newArr.length}\n`;

    document.getElementById('arrayResult').textContent = result;
}
