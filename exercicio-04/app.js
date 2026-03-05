/************************************************************
 * Objetivo: Arquivo responsável por coletar dados do usuário
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculoFatorial = require('./module/calculoFatorial')
const validacoes = require('./module/validacoes')

entradaDeDados.question('Insira um número: ', (fatorial)=>{
    let valorFatorial = Number(fatorial)

    const validarFatorial = validacoes.validarFatorial(valorFatorial)

    if(validarFatorial){
        let  resultado = calculoFatorial.calcularFatorial(valorFatorial)
        console.log(resultado)
    }else{
        console.log('ERRO: DEVE-SE APENAS INSERIR NÚMEROS MAIORES QUE 1.')
    }
})