const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertirEntradaArreglo(input) {
    return input.split(' ').map(Number);
}


rl.question('Ingresa los elementos del primer arreglo separados por espacios: ', (input1) => {
    const arreglo1 = convertirEntradaArreglo(input1);


    rl.question('Ingresa los elementos del segundo arreglo separados por espacios: ', (input2) => {
        const arreglo2 = convertirEntradaArreglo(input2);


        rl.question('Ingresa la posición donde insertar el segundo arreglo: ', (posicion) => {
            const pos = Number(posicion);


            arreglo1.splice(pos, 0, ...arreglo2);

 
            console.log(`Arreglo resultante: ${arreglo1.join(', ')}`);

            rl.close();
        });
    });
});
