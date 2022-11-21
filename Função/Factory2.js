function criarProduto(nome,produto){
    return{
        nome,
        produto,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook' , 234.99))
console.log(criarProduto('Ipad' , 134.99))