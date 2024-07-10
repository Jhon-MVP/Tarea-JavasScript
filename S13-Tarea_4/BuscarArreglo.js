const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingresa los elementos del arreglo separados por espacios: ', (input) => {

    const elementos = input.split(' ').map(Number);

    rl.question('Ingresa el elemento a buscar: ', (elemento) => {
        const elem = Number(elemento);

        const indice = elementos.indexOf(elem);

        if (indice !== -1) {
            console.log(`El elemento ${elem} se encuentra en el índice ${indice}.`);
        } else {
            console.log(`El elemento ${elem} no se encuentra en el arreglo.`);
        }

        rl.close();
    });
});