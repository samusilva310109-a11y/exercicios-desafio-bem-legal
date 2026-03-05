/************************************************************
 * Objetivo: Arquivo responsável por realizar calculos de tabuadas
 * e exibi-las
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Versão: 1.0
 ***********************************************************/

const calcularTabuada = (numTabuada,numInicial, numFinal)=>{

    let tabuda = Number(numTabuada)
    let inicial = Number(numInicial)
    let final = Number(numFinal)
    let resultado

    for(contador = inicial; contador <= final; contador++){
        resultado = tabuda * contador
        console.log(`${tabuda} X ${contador} = ${resultado}`)
    }
}

const formarTabuadas = (tabudaInicial, tabudaFinal, numInicial, numFinal)=>{
    
    let tabInicial = Number(tabudaInicial)
    let tabFinal = Number(tabudaFinal)

    for(cont = tabInicial; cont <= tabFinal; cont++){
        console.log(`Tabuada do [${cont}] \n`)
        calcularTabuada(cont, numInicial, numFinal)
        console.log('')
    }

}

module.exports = {
    formarTabuadas
}
// let testeTabuada = calcularTabuada(2, 2, 12) <- funcionado
// let formTab = formarTabuadas(2, 10, 0, 12) <- funcionando