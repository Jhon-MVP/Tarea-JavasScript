const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma === num;
}

rl.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);

    if (!isNaN(num)) {
        if (esPerfecto(num)) {
            console.log(`${num} es un número perfecto.`);
        } else {
            console.log(`${num} no es un número perfecto.`);
        }
    } else {
        console.log('Por favor, ingresa un número válido.');
    }

    rl.close();
});

