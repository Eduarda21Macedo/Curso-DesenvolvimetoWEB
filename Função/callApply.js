function getPreco(imposto = 0 ,moeda = 'R$'){
    return ` ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

 const produto = {
    nome:'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco

 }
 globa.preco = 20
 globa.desc = 0.1
 console.log(getPreco())
 console.log(produto.getPreco())

 const carro = { preço : 4999, desc: 0.20}
 console.log(getPreco.call(carro))
 console.log(getPreco.apply(carro))