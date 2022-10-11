const nome = 'Rebeca'
const concatenaçao = 'Olá '  +  nome  + '!' //Não pode ter quebra de texto

//fazendo a interpolação, que interpreta e substitui a variável em forma de template

const template = `
    Olá 
    ${nome}!`

console.log(concatenaçao, template)

//expressões ...

console.log(`1 + 1 = ${1 + 1}`)
//funçao que converte letras minusculas ra maiusculas

const up = texto => texto.toUpperCase()
console.log(`Ei..${up('cuidado')}!`)