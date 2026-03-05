/************************************************************
 * Objetivo: Arquivo responsável por armazenar funções para 
 * verificar números pares e printa-los na interface
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Data de inicío: 05/03/2026
 * Versão: 1.0
 ***********************************************************/

const calcPares = (numInicial, numFinal) => {
    console.log('Lista de números pares: \n')
    let contPares = 0
    for (let cont = numInicial; cont <= numFinal; cont++) {
        if (cont % 2 === 0) {
            console.log(cont)
            contPares++
        }
    }
    console.log(`Quantidade de números pares: ${contPares} \n`)
}

const calcImapares = (numInicial, numFinal) => {
    console.log('Lista de números ímpares: ')
    let contImpares = 0
    for (let cont = numInicial; cont <= numFinal; cont++) {
        if (cont % 2 != 0) {
            console.log(cont)
            contImpares++
        }
    }
    console.log(`Quantidade de números ímpares: ${contImpares} \n`)
}

module.exports = {
    calcImapares, 
    calcPares
}