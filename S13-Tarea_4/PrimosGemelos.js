const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sonPrimosGemelos(num1, num2) {
    if (esPrimo(num1) && esPrimo(num2) && Math.abs(num1 - num2) === 2) {
        return true;
    }
    return false;
}

rl.question('Ingresa el primer número: ', (numero1) => {
    const num1 = parseInt(numero1);

    rl.question('Ingresa el segundo número: ', (numero2) => {
        const num2 = parseInt(numero2);

        if (!isNaN(num1) && !isNaN(num2)) {
            if (sonPrimosGemelos(num1, num2)) {
                console.log(`${num1} y ${num2} son primos gemelos.`);
            } else {
                console.log(`${num1} y ${num2} no son primos gemelos.`);
            }
        } else {
            console.log('Por favor, ingresa números válidos.');
        }

        rl.close();
    });
});
