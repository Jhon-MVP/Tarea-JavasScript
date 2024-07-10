const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function eliminarSubcadena(cadena, subcadena) {

    const indice = cadena.indexOf(subcadena);

    if (indice !== -1) {

        const parteInicial = cadena.slice(0, indice);

        const parteFinal = cadena.slice(indice + subcadena.length);


        const cadenaSinSubcadena = parteInicial + parteFinal;

        return cadenaSinSubcadena;
    } else {

        return "La subcadena no se encontró en la cadena.";
    }
}


rl.question('Ingresa una cadena: ', (cadena) => {
    rl.question('Ingresa la subcadena a eliminar: ', (subcadena) => {

        const resultado = eliminarSubcadena(cadena, subcadena);
        console.log(`Cadena resultante: ${resultado}`);

        rl.close();
    });
});