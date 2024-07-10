const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decimalToOctal(numero) {
    if (numero === 0) {
        return '0'; 
    }

    let octal = '';
    let n = numero;

    while (n > 0) {
        octal = (n % 8) + octal; 
        n = Math.floor(n / 8); 
    }

    return octal;
}


rl.question('Ingresa un número decimal: ', (input) => {
    const numero = parseInt(input); 

    if (isNaN(numero)) {
        console.log('Entrada inválida. Por favor ingresa un número válido.');
    } else {

        const octal = decimalToOctal(numero);
        console.log(`El número ${numero} en octal es: ${octal}`);
    }

    rl.close();
});