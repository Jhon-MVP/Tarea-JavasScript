const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa los elementos del arreglo separados por espacios: ', (input) => {
    const elementos = input.split(' ');

    const cadena = elementos.join(', ');

    console.log(`Arreglo convertido a cadena: ${cadena}`);

    rl.close();
});
