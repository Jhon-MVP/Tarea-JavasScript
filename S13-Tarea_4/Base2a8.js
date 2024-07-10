const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarioAOctal(binario) {
    while (binario.length % 3 !== 0) {
        binario = '0' + binario;
    }

    let octal = '';
    
    for (let i = 0; i < binario.length; i += 3) {

        let grupo = binario.substring(i, i + 3);

        let digitoOctal = parseInt(grupo, 2).toString(8);

        octal += digitoOctal;
    }
    
    return octal;
}

rl.question('Introduce un número binario: ', (input) => {
    let binario = input.trim();


    if (/^[01]+$/.test(binario)) {
        let resultadoOctal = binarioAOctal(binario);
        console.log(`El número binario ${binario} en octal es ${resultadoOctal}`);
    } else {
        console.log("El valor introducido no es un número binario válido.");
    }

    rl.close();
});
