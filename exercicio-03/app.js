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

const tabuada = require('./module/tabuada')
const validacoes = require('./module/validacoes')

entradaDeDados.question('Insira a tabuada inicial (deve ser entre 2 e 100): ', (tabInicial)=>{
    let tabuadaInicial = tabInicial

    entradaDeDados.question('Insira a tabuada final (deve ser entre 2 e 100): ', (tabFinal)=>{
        let tabuadaFinal = tabFinal
        
        entradaDeDados.question('Insira o multiplicador inicial das tabuadas (deve ser entre 1 e 50): ', (valorInicial)=>{
            let multiplicadorInicial = valorInicial
            
            entradaDeDados.question('Insira o multiplicador final das tabudas (deve ser entre 1 e 50): ', (valorFinal)=>{
                let multiplicadorFinal = valorFinal

                const valTabuada = validacoes.validarTabuadas(tabuadaInicial, tabuadaFinal)
                const valMultiplicador = validacoes.validarMultiplicador(multiplicadorInicial, multiplicadorFinal)

                if(valTabuada){
                    if(valMultiplicador){
                        tabuada.formarTabuadas(tabInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal)
                        entradaDeDados.close()
                    }else{
                        console.log('ERRO: OS VALORES PARA MULTIPLICADORES SÃO INVÁLIDOS')
                        entradaDeDados.close()
                    }
                }else{
                    console.log('ERRO: OS VALORES PARA A TABUADA SÃO INVÁLIDOS')
                    entradaDeDados.close()
                }
            })
        })
    })
})
