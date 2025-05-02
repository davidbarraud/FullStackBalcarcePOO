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
    public suma(num1:number, num2:number): void {
        this.resultado = num1 + num2;
        console.log (`La Suma del número: ${num1} y el número ${num2} es: ${this.resultado} \n`);
    }

// Método para Restar
    public resta(num1:number, num2:number): void {
        this.resultado = num1 - num2;
        console.log (`La Resta del número: ${num1} y el número ${num2} es: ${this.resultado} \n`);
    }

// Método para Multiplicar
public multiplicar(num1:number, num2:number): void {
    if (num1 === 0 || num2 ===0) {
        console.log (`La multiplicación por cero da siempre cero \n`);   
    } else {
        this.resultado = num1 * num2;
        console.log (`La Multiplicación del número: ${num1} y el número ${num2} es: ${this.resultado} \n`);
    }
}

// Método para Dividir
public dividir(num1:number, num2:number): void {
    if (num1===0 || num2 ===0) {
        console.log (`No se puede dividir por cero \n`);   
    } else {
        this.resultado = num1 / num2;
        console.log (`La División del número: ${num1} y el número ${num2} es: ${this.resultado} \n`);
    }
}

}

const operacion = new Calculadora;
operacion.suma(123, 2);
operacion.suma(100, 10);
operacion.resta(9, 5);
operacion.resta(487, 500);
operacion.multiplicar(10, 10);
operacion.multiplicar(0, 10);
operacion.multiplicar(10, 0);
operacion.multiplicar(5, 5);
operacion.dividir(10, 10);
operacion.dividir(0, 10);
operacion.dividir(10, 0);
operacion.dividir(99, 3);
operacion.dividir(8, 10);

