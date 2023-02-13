/* 121 - Herança - reuso de código
Um Objeto em javascript,ele tem uma referência para o seu prtótipo,
dessa forma é definido herança.Apartir da referência para  um prototipo ,
você tem a referência para um objeto,tem atributos e comportamentos que
podem ser acessado do objeto filho.*/

const ferrari ={
    modelo: 'F40',
    velMax: 324
   }
   
   const volvo={
    modelo: 'V40',
    velMax: 200
   }
   
   console.log(ferrari.__proto__)
   console.log(ferrari.__proto__ === Object.prototype)
   console.log(volvo.__proto__ === Object.prototype)
   console.log(Object.prototype.__proto__ === null)
   
   function MeuObjeto(){}
   console.log(typeof Object, typeof MeuObjeto)
   console.log(Object.prototypr,MeuObjeto.prototype)