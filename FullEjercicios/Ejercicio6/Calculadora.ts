/* 6-Implementar una clase que simule el comportamiento de una Calculadora, con dos números y
las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben
retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las
operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0.
Probar la calculadora con diferentes valores
 */
class Calculadora {
    //Propiedades
    private resultado: number;
      
    //Constructor
    public constructor() {
        this.resultado = 0;
        
    }

// Método para sumar
/* Se podría hacer también con return pero luego hay que invocarlo por medio de console.log
 public suma(num1:number, num2:number): number {
        this.resultado = num1 + num2;
        return this.resultado;
    }
*/

//Métods para realizar las operaciones
  private suma(num1:number, num2:number): number {
       return this.resultado = num1 + num2;
    }
public resta(num1:number, num2:number): number {
       return this.resultado = num1 - num2;
}
public multiplica(num1:number, num2:number): number {
    return this.resultado = num1 * num2;
       
}
public divide(num1:number, num2:number): number {
    return this.resultado = num1 / num2;
}

// métodos que implementan las operaciones de la calculadora
//Métod para Sumar
    public sumar(num1:number, num2:number): void {
        const resultado = this.suma(num1, num2);
        console.log (`La Suma del número: ${num1} y el número ${num2} es: ${resultado} \n`);
    }

// Método para Restar
    public restar(num1:number, num2:number): void {
        const resultado = this.resta(num1, num2);
        console.log (`La Resta del número: ${num1} y el número ${num2} es: ${resultado} \n`);
    }

// Método para Multiplicar. valida si hay un cero para no avanzar
public multiplicar(num1:number, num2:number): void {
    if (num1 === 0 || num2 ===0) {
        console.log (`La multiplicación por cero da siempre cero \n`);   
    } else {
        const resultado = this.multiplica(num1, num2);
        console.log (`La Multiplicación del número: ${num1} y el número ${num2} es: ${resultado} \n`);
    }
}

// Método para Dividir
public dividir(num1:number, num2:number): void {
    if (num1===0 || num2 ===0) {
        console.log (`No se puede dividir por cero \n`);   
    } else {
        const resultado = this.divide(num1, num2);
        console.log (`La División del número: ${num1} y el número ${num2} es: ${resultado} \n`);
    }
}

}

const operacion = new Calculadora;
operacion.sumar(123, 2);
operacion.sumar(100, 10);
operacion.restar(9, 5);
operacion.restar(487, 500);
operacion.multiplicar(10, 10);
operacion.multiplicar(0, 10);
operacion.multiplicar(10, 0);
operacion.multiplicar(5, 5);
operacion.dividir(10, 10);
operacion.dividir(0, 10);
operacion.dividir(10, 0);
operacion.dividir(99, 3);
operacion.dividir(8, 10);

