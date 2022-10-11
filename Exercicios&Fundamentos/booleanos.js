let isAtivo = false // let quando for mudar a variavél
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // converte pra saber se é verdadeiro ou falso com ! sinal de negaçao e !! sinal de não não.

console.log('os verdadeiros ....')

console.log(!!13)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos ....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ` ` ))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')