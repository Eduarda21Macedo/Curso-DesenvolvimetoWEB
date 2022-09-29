const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

//quando tentar acessar uma posiçao que não existe,ele retorna indefine
valores[5] = 10 // acesso pelo indice
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false,null,'teste')// metodo pra colocar mais posiçoes
//metodo pra tirar uma posição
console.log(valores.pop())
console.log(valores)

//apaga uma posiçao
delete valores[0]
console.log(valores)

//aqui ele é um objeto
console.log(typeof valores)