
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function decimalAHexadecimal(numero) {

    let hex = [];
    

    const hexDigits = '0123456789ABCDEF';
    

    while (numero > 0) {

        let resto = numero % 16;
        

        hex.push(hexDigits[resto]);
        

        numero = Math.floor(numero / 16);
    }
    

    if (hex.length === 0) {
        hex.push('0');
    }
    

    return hex.reverse().join('');
}


rl.question('Introduce un número decimal: ', (input) => {
    let numeroDecimal = parseInt(input, 10);
    

    if (!isNaN(numeroDecimal)) {
        let resultadoHexadecimal = decimalAHexadecimal(numeroDecimal);
        console.log(`El número ${numeroDecimal} en hexadecimal es ${resultadoHexadecimal}`);
    } else {
        console.log("El valor introducido no es un número válido.");
    }
    

    rl.close();
});



