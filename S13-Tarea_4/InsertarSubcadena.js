const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function insertarSubcadena(cadena, subcadena, posicion) {
    const parteInicial = cadena.slice(0, posicion);
    const parteFinal = cadena.slice(posicion);

    const cadenaInsertada = parteInicial + subcadena + parteFinal;

    return cadenaInsertada;
}

rl.question('Ingresa una cadena: ', (cadena) => {
    rl.question('Ingresa una subcadena a insertar: ', (subcadena) => {
        rl.question('Ingresa la posición donde insertar la subcadena (índice): ', (posicion) => {
            const pos = parseInt(posicion);

            if (!isNaN(pos)) {
                const resultado = insertarSubcadena(cadena, subcadena, pos);
                console.log(`Cadena resultante: ${resultado}`);
            } else {
                console.log('La posición debe ser un número entero válido.');
            }

            rl.close();
        });
    });
});