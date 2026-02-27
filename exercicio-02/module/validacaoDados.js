/**
 * Objetivo: Arquivo responsável por conter funções de validação de dados e definição de status(Numeros ou caracteres)
 * Data: 27/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0
 */

module.exports = {
    validarNomes, 
    validarNotas,
    validarSexos, 
    definirSituacaoAluno,
    definirSituacaoAposExame
}

const validarNotas = (num1, num2, num3, num4) =>{
    if(num1 == '' || num2 == '' || num3 == '' || num4 == '')
        return false
    else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4))
        return false
    else if (
        num1 > 100 || num1 < 0 ||
        num2 > 100 || num2 < 0 ||
        num3 > 100 || num3 < 0 ||
        num4 > 100 || num4 < 0
    )
        return false
    else
        return true
        
}

const definirSituacaoAluno = (media)=> {
    if(media >= 70)
        return 'Aprovado'
    else if(media >= 50)
        return 'Em recuperação'
    else
        return 'Reprovado'
}

const definirSituacaoAposExame = (mediaExam) => {
    if(mediaExam >= 60)
        return 'Aprovado'
    else 
        return 'Reprovado'
}

const validarNomes = (nome1, nome2, nome3, nome4) =>{
    if(nome1 == '' || nome2 == '' || nome3 == '' || nome4 == '')
        return false
    else if(!isNaN(nome1) || !isNaN(nome2)|| !isNaN (nome3) || !isNaN(nome4))
        return false
    else
        return true
}

const validarSexos = (sexo) => {
    let sex = sexo.toUpperCase() 
    if(sex == 'MASCULINO' || sex == 'FEMININO')
        return true
    else
        return false
}

// let sexo = validarSexos('feminino') <- aprovado
// let staus = definirSituacaoAluno(70) <- aprovado
// let nota = validarNotas(100, 90, 89, 0) <-aprovado
// let nomes = validarNomes('s23', 'joe', 'globalThis', 'algo') <- aprovado
// let recuperação = definirSituacaoAposExame(59.9) <- aprovado
