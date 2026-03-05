/************************************************************
 * Objetivo: Arquivo responsável por armazenar funções para 
 * validar os números
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Data de inicío: 05/03/2026
 * Versão: 1.0
 ***********************************************************/


const validarNumeros = (numInicial, numFinal) => {
    if (numInicial == '' || numFinal == '')
        return false
    else if (isNaN(numInicial) || isNaN(numFinal))
        return false
    else if (numInicial > numFinal)
        return false
    else if (numInicial < 0 || numInicial > 500
        || numFinal < 100 || numFinal > 1000
    )
        return false
    else if (numInicial == numFinal)
        return false
    else
        return true
}

module.exports = {
    validarNumeros
}