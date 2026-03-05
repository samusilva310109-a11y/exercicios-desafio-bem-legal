/************************************************************
 * Objetivo: Arquivo responsável por armazenar funções de cálculo
 * fatorial
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const calcularFatorial = (valor)=>{
    let numero = Number(valor)
    let fator = 1

    for (cont = 1; cont <= numero; cont++) {
        fator *= cont;
    }

    return fator
}

module.exports = {
    calcularFatorial
}

// let teste = calcularFatorial(5) <- aprovado