//119 - Notação Literal

const a = 1
const b = 2
const c = 3

//Versão antiga
const obj1 = {a:a,b: b, c: c}
//Versão Nova
const obj2 = { a ,b ,c}
console.log(obj1,obj2)

const nome = 'Nota'
const valor = 7.87

//Versão Antiga
const obj3 = {}
obj3[nome] = valor
console.log(obj3)

//Nova Versão
const obj4 = {[nome]: valor}
console.log(obj4)

const obj5 = {  
 funçao1: function (){
 //...
},
 funcao2(){
//...
}
}
console.log(obj5)