/************************************************************
 * Objetivo: Arquivo responsável por coletar dados do usuário
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const { stdin, stdout } = require('process')
const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: stdin,
    output: stdout
})
