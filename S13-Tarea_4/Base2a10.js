const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarioADecimal(binario) {
    let decimal = 0;
    let longitud = binario.length;
    
    for (let i = 0; i < longitud; i++) {
        let bit = parseInt(binario[i]);
        if (bit === 1) {
            decimal += bit * Math.pow(2, longitud - 1 - i);
        }
    }
    
    return decimal;
}

rl.question('Introduce un número binario: ', (input) => {
    let binario = input.trim();
    
    if (/^[01]+$/.test(binario)) {
        let resultadoDecimal = binarioADecimal(binario);
        console.log(`El número binario ${binario} en decimal es ${resultadoDecimal}`);
    } else {
        console.log("El valor introducido no es un número binario válido.");
    }
    
    rl.close();
});
