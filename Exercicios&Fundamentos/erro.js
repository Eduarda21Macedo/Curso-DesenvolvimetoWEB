function tratarERROelancar (erro){
//throw new Error('...')
//throw 10
//throw true
//throw 'mensagem'

throw{
    nome: erro.name,
    msg: erro.mensage,
    date: new Date
}
}
function imprimirNomeGritado(obj){
try{
console.log(obj.name.toUpperCase() + '!!!')
} catch(e){
    tratarERROelancar(e)
} finally{
 console.log('final')
}

}