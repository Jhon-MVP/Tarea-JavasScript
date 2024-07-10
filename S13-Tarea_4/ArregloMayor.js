const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa los elementos del arreglo separados por espacios: ', (input) => {
    const elementos = input.split(' ').map(Number);

    const max = Math.max(...elementos);

    console.log(`El mayor número del arreglo es: ${max}`);

    rl.close();
});
