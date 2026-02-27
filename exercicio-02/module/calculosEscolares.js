/**
 * Objetivo: Arquivo responsável por conter funções que realizam os cálculos necessários
 * Data: 27/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0
 */


module.exports ={
    calcularMedia,
    calcularNotaFinal
}
const calcularMedia = (nota1, nota2, nota3, nota4)=>{
    let somaNotas = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)
    let media = somaNotas / 4
    return media
}

const calcularNotaFinal = (media, notaExam)=>{
    let notaFinal = Number(media) + Number(notaExam)
    return notaFinal
}

// let media = calcularMedia(100, 89, 90, 0) <- aprovados
// let notaFinal = calcularNotaFinal(media, 55) <- aprovados


