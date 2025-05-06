/* 12-Usando la clase Dado del ejercicio 6, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o
dados en particular. */

//importamos la clase Dado del ejercicio 7
import { Dado } from "../Ejercicio7/Dado";

export class Cubilete {
    private dados : Dado[];
    constructor() {
        this.dados = [];
        //Se crea el arrays con los 5 dados
        for (let i = 0; i < 5; i++) {
            this.dados.push(new Dado());
        }
    }

public lanzarDados():number{
   let resultado: number = 0;
   let valorDado:number = 0;
    console.log(`\n==========================`);
    console.log(`Lanzando todos los dados.\n`);
    for (let i = 0; i < this.dados.length; i++) {
        valorDado = this.dados[i].lanzarDado();
        console.log(`El valor del dado  ${i + 1} es ${valorDado}.`);
         resultado += valorDado;
                
    }
    return resultado;

}

public lanzarDado(num:number){
    console.log(`\n==========================`);
    console.log(`Lanzando un dado.`);
    if (num > 0 && num < 6) {
        console.log(`El valor del dado ${num} es ${this.dados[num - 1].lanzarDado()}.\n`);
    } else {
        console.log(`Ese dado no existe.\n`);
    }
                

}


}


//IMPLEMENTACIÓN
// Descomntar ya que esta clase se usa en el Ejercicio 14
/* 
const cubilete1 = new Cubilete;
cubilete1.lanzarDados();
cubilete1.lanzarDado(1);
cubilete1.lanzarDado(2);
cubilete1.lanzarDado(3);
cubilete1.lanzarDado(4);
cubilete1.lanzarDado(5);
cubilete1.lanzarDado(6);
cubilete1.lanzarDado(0); */