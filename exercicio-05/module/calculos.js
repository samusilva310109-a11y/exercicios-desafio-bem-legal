const calcPares = (numInicial, numFinal) => {
    console.log('Lista de números pares: ')
    let contPares = 0
    for (let cont = numInicial; cont <= numFinal; cont++) {
        if (cont % 2 === 0) {
            console.log(cont)
            contPares++
        }
    }
    console.log(`Quantidade de números pares: ${contPares}`)
}

const calcImapares = (numInicial, numFinal) => {
    console.log('Lista de números ímpares: ')
    let contImpares = 0
    for (let cont = numInicial; cont <= numFinal; cont++) {
        if (cont % 2 != 0) {
            console.log(cont)
            contImpares++
        }
    }
    console.log(`Quantidade de números ímpares: ${contImpares}`)
}

let pares = calcPares(2, 10)
let impares = calcImapares(2, 10)
