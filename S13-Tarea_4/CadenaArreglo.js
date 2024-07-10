const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingresa una cadena: ', (cadena) => {

    const arreglo = cadena.split(' ');


    console.log('Arreglo resultante:', arreglo);

    rl.close();
});
