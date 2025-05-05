/* 7-Implementar una clase que simule el comportamiento de un dado de seis caras. La clase debe
tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase
cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al
atributo valor del dado
● Método que devuelve el valor actual del dado. */

class Dado {
    //Propiedades
    private valor: number;
      
    //Constructor
    public constructor() {
        this.valor = 1;
        
    }

// Método cuando se lanza el dado, toma un valor aleatorio entre 1 y 6. Math.Floor devuelve la parte entera de un número
//Math.random devuelve un número aleatorio entre 0 y 1. Se multiplica por 6 lo que da un valor entre 0 y 5 y se le suma 1
// para que quede entre 1 y 6

private inicializarDado(): number {
        this.valor = Math.floor(Math.random() * 6 + 1);
        return this.valor;
}

// Método para mostrar el valor del dado
    public lanzarDado(): number {
        let dado: number;
        dado = this.inicializarDado();
        return dado;
    }


}

//Implementación: creamos el dado y lo lanzamos 10 veces
const dado1 = new Dado;
for (let i = 0; i < 10; i++) {
    console.log (`El valor del dado en el lanzamiento ${i + 1} es: ${dado1.lanzarDado()} \n`);
}
