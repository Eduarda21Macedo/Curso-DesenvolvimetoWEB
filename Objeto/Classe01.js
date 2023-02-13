class Lançamento {
    constructor(nome = 'Generico',valor = 0){
        this.nome = nome
        this.valor = valor
        this.lançamentos = []
    }
}


class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes 
        this.ano = ano
        this.lançamento = []
        }
    addLançamentos(...lançamentos){
        lançamentos.forEach(l => this.lançamentos.push(l))
    }
    sumario(){
    let valorConsolidado = 0
    this.lançamentos.forEach(l=>{
        valorConsolidado += l.valor
    })
    return valorConsolidado
    }

}

const salario = new Lançamento('Salario',45000)
const contadeLuz = new Lançamento('Luz',-200)
const contas = new CicloFinanceiro(6, 2018)
contas.addLançamentos(salario,contadeLuz)
console.log(contas.sumario())