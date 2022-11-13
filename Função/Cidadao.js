// Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1(){
}

//armazenar em uma variavel
const fun2 = function (){
}

//Armazenar em um array
const array  = [function(a,b){ return a+b},fun1,fun2]
console.log(array[0](2,5))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
comnsole.log (obj.falar())

//Passar função param
function run(fun){
    fun()
}
run(function(){console.log ('Executando...')})

// Uma função pode retotnar /conter um função
function soma(a,b){
    return function(c) {
        console.log (a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)





