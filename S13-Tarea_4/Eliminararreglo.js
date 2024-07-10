const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertirEntradaArreglo(input) {
    return input.split(' ').map(Number);
}


rl.question('Ingresa los elementos del arreglo separados por espacios: ', (input1) => {
    const arreglo = convertirEntradaArreglo(input1);


    rl.question('Ingresa la posición inicial donde comenzar a eliminar: ', (posicion) => {
        const pos = Number(posicion);


        rl.question('Ingresa la cantidad de elementos a eliminar: ', (cantidad) => {
            const cant = Number(cantidad);


            arreglo.splice(pos, cant);


            console.log(`Arreglo resultante: ${arreglo.join(', ')}`);

            rl.close();
        });
    });
});
