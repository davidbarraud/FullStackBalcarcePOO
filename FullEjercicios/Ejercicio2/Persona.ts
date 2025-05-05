/* 2-Plantear una clase Persona, pensar que atributos y métodos puede tener e implementarla en
Typescript. */

class Persona {
    //Propiedades
    private nombre: string;
    private apellido: string;
    private edad: number;
   
    //Constructor
    public constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad= edad;
       
    }


    public mostrarInfo(): void {
       console.log(`La persona se llama  ${this.nombre} ${this.apellido} \n`);
        
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

const persona1 = new Persona("Chuck", "Norris", 28);
persona1.mostrarInfo();
persona1.esMayor();
persona1.correr();
persona1.comprar("Pan", 2500.99);
persona1.comprar("Lechuga", 399.54);
persona1.comprar("Nunchacus", 125000);