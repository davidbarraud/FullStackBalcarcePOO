/* 8-Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de
cuenta y Saldo actual. Implementa los siguientes métodos:
● Un constructor que me permita establecer el número de cuenta y el saldo.
● Un método que incremente el saldo.
● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
● Un método que devuelva el saldo actual */

class CuentaBancaria {
    //Propiedades
    private saldoActual: number;
    private numeroCuenta: number;
      
    //Constructor
    public constructor( numeroCuenta:number ,saldoActual: number) {
        this.saldoActual = saldoActual;
        this. numeroCuenta = numeroCuenta;      
        
    }

// Método para incrementar el saldo
public agregarDinero(num:number): void {
    console.log (`Ingresando Dinero ============================== `);
    console.log (`El saldo anterior era $${this.saldoActual}. El monto ingresado es: $${num}. El saldo actual es: $${this.saldoActual += num} \n`);    
           
}

// Método para disminuir el saldo
public retirarDinero(num:number): void {
    console.log (`Retirando Dinero ============================== `);
    if (num > this.saldoActual) {
        console.log (`No se puede retirar $${num}. Saldo insuficiente. El saldo actual es $${this.saldoActual}  \n`); 

    } else {
        console.log (`El saldo anterior era $${this.saldoActual}. El monto a retirar es: $${num}. El saldo actual es: $${this.saldoActual -= num} \n`);    
    }
}

// Método para mostrar el saldo
public mostraSaldo(): void {
    console.log (`============================== `);
    console.log (`La Cuenta Corriente nro: ${this.numeroCuenta} tiene un saldo actual de: $${this.saldoActual} `);    
    console.log (`============================== \n`);       
}

        
}

//Implementación: creamos el dado y lo lanzamos 10 veces
const usuario1 = new CuentaBancaria(100000001, 123500);
usuario1.agregarDinero(1000);
usuario1.agregarDinero(1000);
usuario1.agregarDinero(1000);
usuario1.mostraSaldo();
usuario1.retirarDinero(50000);
usuario1.mostraSaldo();
usuario1.retirarDinero(2000000);
usuario1.mostraSaldo();


