const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingresa la primera cadena: ', (cadena1) => {
    rl.question('Ingresa la segunda cadena: ', (cadena2) => {

        const concatenacion1 = cadena1 + ' ' + cadena2;


        const concatenacion2 = cadena1.concat(' ', cadena2);


        console.log(`Concatenación usando +: ${concatenacion1}`);
        console.log(`Concatenación usando concat(): ${concatenacion2}`);

        rl.close();
    });
});