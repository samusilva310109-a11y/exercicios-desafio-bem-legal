/************************************************************
 * Objetivo: Arquivo responsável por validadar dados
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const validarTabuadas = (tabInicial, tabFinal)=>{
    if(tabInicial == '' || tabFinal == '')
        return false
    else if(isNaN(tabInicial) || isNaN(tabFinal))
        return false
    else if(tabInicial < 2 || tabFinal > 100)
        return false
    else
        return true
}

const validarMultiplicador = (numInicial, numFinal)=>{
    if(numInicial == '' || numFinal == '')
        return false
    else if(isNaN(numInicial) || isNaN(numFinal))
        return false
    else if(numInicial < 1 || numFinal > 50)
        return false
    else
        return true
}

module.exports = {
    validarTabuadas,
    validarMultiplicador
}
// let valTab = validarTabuadas('2', 100) <- funcionando
// let valMulti = validarMultiplicador('1', 50) <- funcionando