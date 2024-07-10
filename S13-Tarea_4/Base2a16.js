const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarioAHexadecimal(binario) {
    while (binario.length % 4 !== 0) {
        binario = '0' + binario;
    }

    let hexadecimal = '';
    
    for (let i = 0; i < binario.length; i += 4) {
        let grupo = binario.substring(i, i + 4);
        let digitoHexadecimal = parseInt(grupo, 2).toString(16).toUpperCase();
        hexadecimal += digitoHexadecimal;
    }
    
    return hexadecimal.toUpperCase();
}

rl.question('Introduce un número binario: ', (input) => {
    let binario = input.trim();

    if (/^[01]+$/.test(binario)) {
        let resultadoHexadecimal = binarioAHexadecimal(binario);
        console.log(`El número binario ${binario} en hexadecimal es ${resultadoHexadecimal}`);
    } else {
        console.log("El valor introducido no es un número binario válido.");
    }

    rl.close();
});
