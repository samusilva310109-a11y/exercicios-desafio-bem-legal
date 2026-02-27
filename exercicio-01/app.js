/**
 * Objetivo: Arquivo responsável por captar a entrada de dados
 * Data 27/02/2026 
 * 
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão 1.0
 */

const calculoIMC = require('./module/calculoImc')
const readLine = require('readline')
const entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Entre com a altura do paciente(m):', (altura)=>{
    let valorAltura = Number(altura.replace(',','.'))

    entradaDeDados.question('Entre com o peso do paciente(Kg)', (peso)=>{
        let valorPeso = Number(peso.replace(',','.'))

        let validarDados = calculoIMC.validarDados(valorPeso, valorAltura)
        let imc
        let statusIMC


        if(validarDados){
            imc = calculoIMC.calcularIMC(valorPeso, valorAltura)

            if(imc){
                statusIMC = calculoIMC.definirStatus(imc)
                console.log(`-------DADOS------
                    \nAltura do paciente: ${valorAltura}
                    \nPeso do paciente: ${valorPeso}
                    \nIMC do paciente: ${imc.toFixed(2)}
                    \nCondição do paciente: ${statusIMC} `)
                
                entradaDeDados.close()
            }else
              console.log('ERRO AO CALCULAR IMC') 

        }else{
            console.log('ERRO: DADOS INVÁLIDOS')
            entradaDeDados.close()
        }
        
    })
})