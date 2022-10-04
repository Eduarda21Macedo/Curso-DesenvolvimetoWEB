//Funçao sem retorno
function imprimirSoma(a,b){
console.log (a + b)
}

imprimirSoma(2,3)
//a linguagem n se preocupa com os parametros.
imprimirSoma(2)
imprimirSoma(2,10,12,12,45)

//Funçao com Retorno
function soma(a,b =0){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))