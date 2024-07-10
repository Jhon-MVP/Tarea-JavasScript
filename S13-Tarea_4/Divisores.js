const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function divisores(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

rl.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);

    if (!isNaN(num)) {
        const resultado = divisores(num);
        console.log(`Los divisores de ${num} son: ${resultado}`);
    } else {
        console.log('Por favor, ingresa un número válido.');
    }

    rl.close();
});
