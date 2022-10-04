{
    {
        {
            { 
            var sera  = 'Será?'
            console.log(sera)
            }
        }
    }
}

//tando dentro do escopo quanto fora ela vai ser chamada
console.log(sera)

function teste(){
 var local  =123 
 console.log(local)//só sera chamada caso esteja dentro do escopo,pois aqui se trata de uma função
}
teste()
//console.log(local)//aqui ocorre um not defined