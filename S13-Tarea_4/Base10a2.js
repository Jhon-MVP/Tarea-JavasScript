const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decimalToBinary(numero) {
    if (numero === 0) {
        return '0'; 
    }

    let binario = '';
    let n = numero;

    while (n > 0) {
        binario = (n % 2) + binario; 
        n = Math.floor(n / 2);
    }

    return binario;
}

rl.question('Ingresa un número decimal: ', (input) => {
    const numero = parseInt(input); 

    if (isNaN(numero)) {
        console.log('Entrada inválida. Por favor ingresa un número válido.');
    } else {
        const binario = decimalToBinary(numero);
        console.log(`El número ${numero} en binario es: ${binario}`);
    }

    rl.close();
});