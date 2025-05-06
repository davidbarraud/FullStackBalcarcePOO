/* 2-Plantear una clase Persona, pensar que atributos y métodos puede tener e implementarla en
Typescript. */

export class Persona {
    //Propiedades
    protected nombre: string;
    protected apellido: string;
    protected edad: number;
    protected dni: number;
   
    //Constructor
    public constructor(nombre: string, apellido: string, edad: number, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad= edad;
        this.dni = dni;
       
    }


    public mostrarInfo(): void {
       console.log(`La persona se llama  ${this.nombre} ${this.apellido}, tiene ${this.edad} años y su DNI es: ${this.dni} \n`);
        
    }
    
    public getDni(): number {
       return this.dni;
         
     }
     
     public getNombre(): string {
        return this.nombre +" " + this.apellido;
    }

    public esMayor(): void {
        if (this.edad >=18 ) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad. \n`);
        } else {
            console.log(`${this.nombre} ${this.apellido} es menor de edad. \n`);
        }
         
     }
    public correr(): void {
        console.log(`${this.nombre} ${this.apellido} puede correr \n`);
         
     }

     public comprar(producto:string, precio:number): void {
        console.log(`${this.nombre} ${this.apellido} compró ${producto} y pagó $${precio} \n`);
         
     } 
}

//IMPLEMENTACIÓN
// Descomentar ya que esta clase se usa en el Ejercicio 14
/* const persona1 = new Persona("Chuck", "Norris", 28, 24567890);
persona1.mostrarInfo();
persona1.esMayor();
persona1.correr();
persona1.comprar("Pan", 2500.99);
persona1.comprar("Lechuga", 399.54);
persona1.comprar("Nunchacus", 125000); */