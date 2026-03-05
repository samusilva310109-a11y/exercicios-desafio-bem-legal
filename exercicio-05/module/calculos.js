const calcPares = (numInicial, numFinal)=>{
    console.log('Lista de números pares: ')
    for(let cont = numInicial; cont <= numFinal; cont++){
        if(cont % 2 === 0){
                console.log(cont)
        }
    }
}

const calcImapares = (numInicial, numFinal)=>{
    console.log('Lista de números ímpares: ')
    for(cont = numInicial; cont <= numFinal; cont++){
        if(cont % 2 != 0){
            console.log(cont)
        }
    }
}

let pares = calcPares(2, 10)
let impares = calcImapares(2,10)
