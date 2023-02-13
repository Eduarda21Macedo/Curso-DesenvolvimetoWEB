//118  -  Objetos constantes

//pessoa -> 123 -> {...}
const pessoa ={ nome: 'João'}
pessoa.nome = 'Pedro' 
console.log(pessoa)

Objeto.frezze(pessoa)
//Depois de ter colocado o freeze nada pode ser feito

pessoa.nome = 'Maria'
pessoa.end ='Rua ABC'
delete pessoa.nome
console.log(pessoa)
console.log(pessoa.nome)

const pessoaConstante =Object.freeze({ nome: 'João'})
console.log(pessoaConstante)
