const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


rl.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);

    if (!isNaN(num)) {
        if (esPrimo(num)) {
            console.log(`${num} es un número primo.`);
        } else {
            console.log(`${num} no es un número primo.`);
        }
    } else {
        console.log('Por favor, ingresa un número válido.');
    }

    rl.close();
});
