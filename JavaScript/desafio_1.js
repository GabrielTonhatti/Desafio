const readlineSync = require('readline-sync');

let n = readlineSync.question('Digite o valor de N: ')
let k = readlineSync.question('Digite o valor de k: ')

function digitoUnico(n, k) {

    let digito = new Array();
    let newDig = new Array();
    let string = n.toString();
    let newResult = '';
    let p = '';
    let resultado = 0;
    let digUnico = 0;

    for (let i = 0; i < k; i++) {
        for (let j in string) {
            digito.push(parseInt(string[j]));
        }
    }

    for (let i in digito) {
        p += ` ${digito[i]} +`;
    }

    resultado = digito.reduce((total, el) => total + el);

    p = p.slice(0, -1) + '= '
    p += resultado;
    newResult = resultado.toString();

    for (let i in newResult) {
        newDig[i] = parseInt(newResult[i]);
    }

    digUnico = newDig.reduce((total, el) => total + el);

    while (digUnico > 9) {
        newResult = '';
        newResult = digUnico.toString();

        while (newDig.length) {
            newDig.pop();
        }

        for (let i in newResult) {
            newDig[i] = parseInt(newResult[i]);
        }

        digUnico = newDig.reduce((total, el) => total + el);
    }

    console.log(`N: ${n}`);
    console.log(`K: ${k}`);
    console.log(`P:${p}`);
    console.log(`Dígito único: ${digUnico}`);

}

digitoUnico(n, k);