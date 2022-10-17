Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')
    }else if (nota.entre(4,6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0,3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota Inválida')
    }
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(-1)