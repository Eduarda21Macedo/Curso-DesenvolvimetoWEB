//117 - Estratégias de Criação de Objetos
//CraindoObjeto.js

//usando a notação literal
const obj={}
console.log(obj)

//Object em Js
console.log(typeof Object,typedef, new Object)
const obj2 = new Object
console.lo(obj2)

//Funções construtoras
function Produto (nome,preco,desc) {
this.nome=nome
this.getPrecoDesconto = () =>{
}
}

const p1 = new Produto('Caneta' , 7.99,0.15)
const p2 = new Produto('Notebook',2998.99,0.25)
console.log(p1.getPrecodesconto(),p2.getPrecodesconto())

//Função Factory
function criarFuncionario(nome, salarioBase,faltas){
return {
   nome,
   salarioBase,
   faltas,
 getSalario() {
    return ( salarioBase /30 ) * ( 30 - faltas)
    }
  }
}

const f1 = criarfuncionario('Joaõ',7980,4)
const f2 = criarfuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())

//Object Create
const filha = Object.create(null)
filha.nome ='Ana'
console.log(filha)

//Função JASON
const functionJSON = JSON.parse('{"info: Eu sou JSON"}')
console.log(fromJSON.info)
