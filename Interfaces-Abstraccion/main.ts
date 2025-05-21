/* Definir Interfaces:
● Creen una interfaz llamada AnimalDomestico con las siguientes propiedades:
● name: string
● edad: number
● emitirSonido(): void
● Creen otra interfaz llamada MascotaConDueño con la siguiente propiedad:
● nombreDueño: string
● Crear Clase Abstracta:
Clase Abstracta:
● Definan una clase abstracta llamada Animal que implemente la interfaz AnimalDomestico. Esta clase debe tener las
propiedades nombre y edad (con un nivel de acceso protegido o privado y proporcionando getters para acceder a
ellas). Declaren el método emitirSonido() como un método abstracto.
Crear Clases Concretas:
Creen las siguientes clases que extiendan de la clase abstracta Animal:
● Perro: Esta clase debe implementar la interfaz MascotaConDueño y tener una propiedad adicional llamada raza (de
tipo string). Implementen el método emitirSonido() para que muestre en la consola un ladrido (por ejemplo, "¡Guau
guau!").
● Gato: Esta clase debe implementar la interfaz MascotaConDueño y tener una propiedad adicional llamada colorPelaje
(de tipo string). Implementen el método emitirSonido() para que muestre un maullido (por ejemplo, "¡Miau!").
● Pez: Esta clase debe tener una propiedad adicional llamada tipoAgua (de tipo string, por ejemplo, "dulce" o "salada").
Implementen el método emitirSonido() para que muestre un sonido genérico de pez (por ejemplo, "Glub glub"). */

//########## NOTA #####################//
//Tuve que cambiar el nombre de las clases ya que en esta carpeta, el Ejercicio 3 tiene los nombres de clases de este mismo ejercicio.
// y el Visual Studio Code arroja errores si no le cambio el nombre

// Definimos la interfaz Animal Doméstico
interface AnimalDomestico {
    nombre : string;
    edad: number;
    emitirSonido(): void;
  }
  
  // Definimos la interfaz MascotaConDueño
interface MascotaConDueño {
    nombreDueño : string;
    
  }
  
//Definimos la Clase Abstracta Animals que implementa AnimalDomestico
abstract class Animals implements AnimalDomestico {
  // Propiedades protegidas
  protected name: string;
  protected age: number;

  constructor(nombre: string, edad: number) {
    this.name = nombre;
    this.age = edad;
  }

  // Getters públicos
  get nombre(): string {
    return this.name;
  }

  get edad(): number {
    return this.age;
  }

  // Método abstracto
  abstract emitirSonido(): void;
}


//Definimos la Clase Dog que se extiende de Animals e implementa MascotaConDueño
class Dog extends Animals implements MascotaConDueño{
    public raza : string;
    public nombreDueño: string;

    constructor(nombre:string, edad: number, raza: string, nombreDueño: string){
        super(nombre, edad);
        this.nombreDueño = nombreDueño;
        this.raza = raza;

    }
    emitirSonido(): void {
    console.log(`El perro ${this.nombre} dice Guau, Guau.`);
  }
}

// Clase Cat que extiende Animal e implementa MascotaConDueño
class Cat extends Animals implements MascotaConDueño {
  public nombreDueño: string;
  public colorPelaje: string;

  constructor(nombre: string, edad: number, nombreDueño: string, colorPelaje: string) {
    super(nombre, edad);
    this.nombreDueño = nombreDueño;
    this.colorPelaje = colorPelaje;
  }

  emitirSonido(): void {
    console.log(`El gato ${this.nombre} dice ¡Miau!.`);
    
  }
}

// Clase Fish que solo extiende Animals 
class Fish extends Animals {
  public tipoAgua: string;

  constructor(nombre: string, edad: number, tipoAgua: string) {
    super(nombre, edad);
    this.tipoAgua = tipoAgua;
  }

  emitirSonido(): void {
    console.log(`El pez ${this.nombre} hace Glub, Glub.`);
  }
}


//Implementación
const miPerro = new Dog("Firulais", 5, "Juan", "Labrador");
console.log(miPerro.nombre);        
console.log(miPerro.raza);          
miPerro.emitirSonido();           

const miGato = new Cat("Michi", 3, "Ana", "Negro");
console.log(miGato.nombre);         
console.log(miGato.colorPelaje);   
miGato.emitirSonido();              

const miPez = new Fish("Nemo", 1, "dulce");
console.log(miPez.nombre);         
console.log(miPez.tipoAgua);        
miPez.emitirSonido();         