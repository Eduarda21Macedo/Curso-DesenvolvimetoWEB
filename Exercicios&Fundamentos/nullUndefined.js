let valor  //não iniciado
console.log(valor)
//primeiramente vai dá undefined, pois a variavel foi declarada,mas não inicializada.

valor = null //ausência de valor
console.log(valor)

//console.log(valor.toString()) //Erro!

const produto={}
console.log(produto.preço)
console.log(produto)

produto.preço =3.50
console.log(produto)

produto.preço = undefined //evitar atribuir,deixar a prpria linguagem fazer isso quando necessária
console.log(!!produto.preço)

//delete produto.preço
console.log(produto)

produto.preço = null //sem preço
console.log(!!produto.preço)