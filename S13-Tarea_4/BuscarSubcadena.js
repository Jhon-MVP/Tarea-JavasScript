const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una cadena: ', (cadena) => {
    rl.question('Ingresa una subcadena a buscar: ', (subcadena) => {
        const indice = cadena.indexOf(subcadena);

        if (indice !== -1) {
            console.log(`La subcadena "${subcadena}" está presente en la posición ${indice}.`);
        } else {
            console.log(`La subcadena "${subcadena}" no está presente en la cadena.`);
        }

        rl.close();
    });
});