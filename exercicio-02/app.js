/**
 * Objetivo: Arquivo responsável por coletar dados do usuário
 * Data: 27/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0
 */

const validacaoDados = require('./module/validacaoDados')
const calculosEscolares = require('./module/calculosEscolares')


const readLine = require('readline')
const entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o nome do professor: ', (nomePr) => {
    let nomeProf = nomePr

    entradaDeDados.question('Insira o nome do aluno: ', (nomeAlu) => {
        let nomeAluno = nomeAlu

        entradaDeDados.question('Insira o sexo do professor: ', (sexoP) => {
            let sexoProf = sexoP.toUpperCase()

            entradaDeDados.question('Insira o sexo do aluno: ', (sexoA) => {
                let sexoAluno = sexoA.toUpperCase()

                entradaDeDados.question('Insira o nome do curso: ', (nomeCur) => {
                    let nomeCurso = nomeCur

                    entradaDeDados.question('Insira o nome da disciplina: ', (nomeDisc) => {
                        let nomeDisciplina = nomeDisc

                        entradaDeDados.question('Insira a primeira nota do aluno: ', (nota1) => {
                            let primeiraNota = Number(nota1)

                            entradaDeDados.question('Insira a segunda nota do aluno: ', (nota2) => {
                                let segundaNota = Number(nota2)

                                entradaDeDados.question('Insira a terceira nota: ', (nota3) => {
                                    let terceiraNota = Number(nota3)

                                    entradaDeDados.question('Insira a quarta nota: ', (nota4) => {
                                        let quartaNota = Number(nota4)

                                        //Realizando a validação de dados
                                        let nomes = validacaoDados.validarNomes(nomeAluno, nomeProf, nomeCurso, nomeDisciplina)
                                        let notas = validacaoDados.validarNotas(primeiraNota, segundaNota, terceiraNota, quartaNota)
                                        let valSexoAluno = validacaoDados.validarSexos(sexoAluno)
                                        let valSexoProf = validacaoDados.validarSexos(sexoProf)

                                        if (nomes) {
                                            if (valSexoAluno && valSexoProf) {
                                                if (notas) {
                                                    entradaDeDados.close()
                                                } else {
                                                    console.log('ERRO: CAMPO DAS NOTAS DEVEM SEREM PREENCHIDOS COM NÚMEROS DE 0 A 100!!')
                                                    entradaDeDados.close()
                                                }
                                            } else {
                                                console.log('ERRO: SEXO DO PROFESSOR OU ALUNO INVÁLIDOS!!')
                                                entradaDeDados.close()
                                            }
                                        } else {
                                            console.log('ERRO: NOMES INVÁLIDOS. PREENCHA TODOS OS CAMPOS OU UTILIZE CARACTERES!!')
                                            entradaDeDados.close()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})