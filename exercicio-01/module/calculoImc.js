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
        'Abaixo do peso'
}