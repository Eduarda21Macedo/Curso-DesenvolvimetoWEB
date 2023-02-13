//122 - Herança 02

//Cadeia de Protótipos = '0'
const avo = { atr1: 'A'}
const pai = { __proto_: avo , attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)
const carro ={
velAtual: 0,
velMax: 200,
aceleraMais9delta }