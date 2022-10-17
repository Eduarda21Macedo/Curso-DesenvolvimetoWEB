function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() *(max -min) + min
    return Math.floor(valor)
}
let opçao = 0
while(opçao != 1){
    opçao =getInteiroAleatorioEntre(-1, 10)
    console.log(`opçao escolhida foi ${opçao}.`)
}
console.log('Até a próxima!')