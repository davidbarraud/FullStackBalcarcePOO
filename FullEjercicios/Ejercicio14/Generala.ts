/* 14- Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar
un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes
marcas:

• Escalera : 20 puntos
• Full: 30 puntos
• Poker: 40 puntos
• Generala: 50 puntos
En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que
los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de
desempate a su elección.
En caso de ser necesario, modificar la clase persona para agregarle más atributos. */
import * as readlineSync from 'readline-sync';
// Se importan las clases
import { Persona } from "../Ejercicio2/Persona";
import { Cubilete } from "../Ejercicio12/Cubilete";

// Se crea la clase Jugador que hereda de Persona
class Jugador extends Persona{
     private puntaje: number;   
    constructor(nombre: string, apellido: string,  edad: number, dni: number){
        super(nombre, apellido, edad, dni);
         this.puntaje= 0;        
    }
        
    //Método que va a ser cambiado por medio de polimorfismo en las otras clases
    public mostrarInfo(): void {
         console.log(`El jugador se llama  ${this.nombre} ${this.apellido}, tiene ${this.edad} años, su DNI es: ${this.dni} y tiene un puntaje de:${this.puntaje} puntos. `);
       
        
    }
    public setPuntaje(puntos: number): void {
        this.puntaje = puntos;
    }

    public getPuntaje(): number {
        return this.puntaje;
    }

}



class Generala {
    private jugadores : Jugador[];
    private cubilete : Cubilete;
    constructor() {
        this.jugadores = [];
        this.cubilete = new Cubilete;
    }


// Agregando jugadores al juego
public agregarJugador(jugador: Jugador):void{
    console.log(`=======================================`);
    console.log(`Agregando Jugador al Juego`);
    this.jugadores.push(jugador);
    console.log(`El jugador ${jugador.getNombre()} fue agregado con exito.\n`);
}

public simularPuntaje(){
    let puntos: number =0;
    for (let i = 0; i < this.jugadores.length; i++) {
        puntos = parseInt(readlineSync.question(`Ingrese el puntaje para ${this.jugadores[i].getNombre()}: .\n`));
        this.jugadores[i].setPuntaje(puntos);
    }
}


public determinarGanador(): void {
    let mayorFuerza = 0;
    let puntajeGanador = 0;
    let categoriaGanadora = "Ninguna";
    let jugadorGanador: Jugador | null = null;

    for (let i = 0; i < this.jugadores.length; i++) {
        const jugador = this.jugadores[i];
        const puntaje = jugador.getPuntaje();
        let fuerza = 0;
        let categoria = "Ninguna";

        // Asignar categoría y fuerza
        switch (puntaje) {
            case 20:
                fuerza = 4;
                categoria = "Escalera";
                break;
            case 30:
                fuerza = 5;
                categoria = "Full";
                break;
            case 40:
                fuerza = 6;
                categoria = "Poker";
                break;
            case 50:
                fuerza = 7;
                categoria = "Generala";
                break;
            default:
                fuerza = 3;
                categoria = "Ninguna";
                break;
        }

        // Determinar si este jugador gana
        if (fuerza > mayorFuerza || (fuerza === mayorFuerza && puntaje > puntajeGanador)) {
            mayorFuerza = fuerza;
            puntajeGanador = puntaje;
            categoriaGanadora = categoria;
            jugadorGanador = jugador;
        }
    }

    if (jugadorGanador) {
        console.log(`\n=== GANADOR/A ===`);
        console.log(`Nombre: ${jugadorGanador.getNombre()}`);
        console.log(`Puntaje: ${puntajeGanador}`);
        console.log(`Categoría: ${categoriaGanadora}`);
    } else {
        console.log("No se pudo determinar un ganador.");
    }
}

 public jugar(){
    for (let i = 0; i < this.jugadores.length; i++) {
        let sumatoria: number = 0;
        let parciales: number = 0;
        console.log(`\n=======================================`);
        console.log(`Puntos del jugador ${this.jugadores[i].getNombre()}`);
        console.log(`=======================================`);
        for (let i = 0; i < 3; i++) {
            console.log(`\n Ronda ${i + 1} ************`);
            parciales = this.cubilete.lanzarDados();
            console.log(`Los puntos parciales de la ronda ${i + 1} son: ${parciales} `); 
            sumatoria += parciales;
        }
        console.log(`\nPuntos totales del/la jugador/a ${this.jugadores[i].getNombre()}: ${sumatoria} \n`); 
        this.jugadores[i].setPuntaje(sumatoria);   
    }


 }



}

//IMPLEMENTACIÓN
const generala1 = new Generala();
const jugador1 = new Jugador("Chuck", "Norris", 62, 18222444);
const jugador2 = new Jugador("Emmet", "Brown", 70, 11333777);
const jugador3 = new Jugador("Esmeralda", "Perdida", 22, 47123456);

generala1.agregarJugador(jugador1);
generala1.agregarJugador(jugador2);
generala1.agregarJugador(jugador3);
// Si se quiere simular el puntaje, de descomenta la siguiente línea y se comenta jugar()
//generala1.simularPuntaje();
generala1.jugar();
jugador1.mostrarInfo();
jugador2.mostrarInfo();
jugador3.mostrarInfo();
generala1.determinarGanador();