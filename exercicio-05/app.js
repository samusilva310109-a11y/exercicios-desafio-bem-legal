/************************************************************
 * Objetivo: Arquivo responsável por coletar dados do usuário
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Data de início: 05/03/2026
 * Versão: 1.0
 ***********************************************************/

const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculos = require('./module/calculos.js')
const validacoes = require('./module/validacoes.js')

entradaDeDados.question('Insira o número Inicial (entre 0 a 500): ', (valorInicial) =>{
    let numInicial = valorInicial

    entradaDeDados.question('Insira o número final (diferente do inicial e entre 100 a 1000): ', (valorFinal) => {
        let numFinal = valorFinal

        let valNums = validacoes.validarNumeros(numInicial, numFinal)

        if(valNums){
            let calcImapares = calculos.calcImapares(numInicial, numFinal)
            let calcPares = calculos.calcPares(numInicial, numFinal)
        }else{
            console.log('ERRO: NÚMEROS INVÁLIDOS.')
        }
    })
})