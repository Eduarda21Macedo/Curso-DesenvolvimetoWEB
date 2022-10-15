//tira da estrutura um objeto 

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//tira as variavéis do Objeto Pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//tira da variavel e coloque a i e n
const {nome: n ,idade :i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome,bemHumorado)

const { endereço: { logradouro,numero , cep}} = pessoa
console.log(logradouro, numero,cep)

// tomar cuidado com estruturas aninhadas 