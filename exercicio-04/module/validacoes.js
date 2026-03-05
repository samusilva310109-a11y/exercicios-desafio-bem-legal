/************************************************************
 * Objetivo: Arquivo responsável por validar a entrada de dados
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const validarFatorial = (fatorial)=>{
    if(fatorial == '' || isNaN(fatorial))
        return false
    else if(fatorial <= 1)
        return false
    else
        return true  
}

module.exports = {
    validarFatorial
}