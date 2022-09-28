let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(19.9 * 0.6);
//o * tem prioridade usar parenteses para mudar isso.
console.log( preco * (1 - desconto));
console.log(precoComDesconto);

let nome = "caderno";
let categoria = "Papelaria";
console.log("Produto" + nome +  + "Categoria " + categoria);