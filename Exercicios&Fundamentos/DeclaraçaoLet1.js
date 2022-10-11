//procura sempre o escopo mas abragente.
let numero = 1
{
    let numero = 2
    console.log('dentro= ',numero)
}
console.log('fora =', numero)