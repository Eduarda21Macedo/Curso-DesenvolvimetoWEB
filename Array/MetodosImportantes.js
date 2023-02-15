const frutas = [ 'maça', 'uva' , 'melancia' ,  'morango']
frutas.pop()  // retira da última posição
console.log(frutas)

frutas.push('acerola') // adiciona novo elemento no array
console.log(frutas)

frutas.shift()  //Remove o primeiro
console.log(frutas)

frutas.unshift('pera') // adiciona na primeira posição
console.log(frutas)

frutas.splice(2, 0, 'caja', 'caju')
console.log(frutas)

frutas.splice(3 , 1)
console.log(frutas)

const AlgumasFrutas = frutas.splice(2)
console.log(AlgumasFrutas)

const AlgumasFrutas2 = frutas.slice(1,4)
console.log(AlgumasFrutas2)

