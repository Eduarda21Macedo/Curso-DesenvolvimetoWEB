//120 - Getters/Setters
//getset.js

const sequencia = {
    _valoe: 1, //conversão é tida como privada
    get valor(){return_valor++},
    
    //tipos de validação
    set valor(valor) {
        if(valor > this.valor) {
        this._valor = valor 
    }
    }
    }
    //internamente ele recebe o get e set
    console.log(sequencia.valor,sequencia.valor)
    sequencia.valor = 1000
    console.log(sequencia.valor,sequencia.valor)