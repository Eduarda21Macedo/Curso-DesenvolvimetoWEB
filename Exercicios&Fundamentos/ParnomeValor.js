//par/nome/valor
const saudaçao ='Opa' // contexto léxico 1

function exec() {
const saudaçao = 'Falaaa' //contexto lexico 2 
return saudaçao
}

//objeto são grupos de pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso : 90,
    endereço: {
        logradouro : 'Rua Muito Legal',
        numero: 123
    }

}
console.log(saudaçao)
console.log(exec())
console.log(cliente)

