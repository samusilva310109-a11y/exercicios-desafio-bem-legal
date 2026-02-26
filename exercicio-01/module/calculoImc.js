/***************************************************************************************
 * Objetivo: Arquivo responsável por conter as funções necessárias para o cálculo de IMC
 * Data:25/02/2026
 * 
 * Autor: Samuel Silva Moreira Dos  Santos
 * Versão: 1.0
 */

const calcularIMC = (peso, altura)=>{
    let valorPeso = Number(peso)
    let valorAltura = Number(altura)

    let imc = valorPeso / Math.pow(valorAltura, 2)
    return imc
}

const validarDados = (peso, altura)=>{
    if(peso == '' || isNaN(peso) ||altura == '' || isNaN(altura))
        return false
    else
        return true
}

const definirStatus = (imc)=>{
    if(imc < 18.5)
        return 'Abaixo do peso'
    else if(imc < 25)
        return 'Peso normal'
    else if(imc < 30)
        return 'Acima do peso (sobrepeso)'
    else if (imc < 35)
        return 'Obesida I'
    else if (imc < 40)
        return 'Obesidade II'
    else if(imc >= 40)
        return 'Obesidade III'
}

// let imc = calcularIMC(45, 1.60)
let statusIMC = definirStatus(34.9)

// console.log(imc)
console.log(statusIMC)
