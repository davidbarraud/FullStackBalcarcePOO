// Se crea la superclase Animal.
class Animal{
protected tipo: string;

constructor(tipo: string){
    this.tipo = tipo;
}
public hacerSonido(): void {
    console.log(`${this.tipo} hace un sonido.`);
  }

  public comer(): void {
    console.log(`${this.tipo} puede comer.`);
  }
}


// Se crea la clase Perro que hereda de la Animal.
class Perro extends Animal{
    constructor(tipo: string){
        super(tipo);

    }
    public hacerSonido(): void {
        console.log(`El ${this.tipo} dice Guau Guau.`);
      }
    
      public comer(): void {
        console.log(`${this.tipo} come carne.`);
      }

    public correr(): void {
        console.log(`${this.tipo} puede correr.`);
    }
    
}


//Se crea la clase Pez que hereda de Animal
class Pez extends Animal{
    constructor(tipo: string){
        super(tipo);
    }

    public hacerSonido(): void {
        console.log(`El ${this.tipo} dice Glub, Glub.`);
    }

    public comer(): void {
        console.log(`${this.tipo} come plancton.`);
    }

    public nadar(): void {
        console.log(`${this.tipo} puede nadar.`);
    }


}

//Definimos las instancias de las clases
const  firulais = new Perro("Galgo");
const nemo = new Pez ("Salmón");
const animal = new Animal("Frecita");

//Aplicamos los métodos a cada animal
firulais.hacerSonido();
firulais.comer();
firulais.correr();

nemo.hacerSonido();
nemo.comer();
nemo.nadar();

animal.comer();
animal.hacerSonido();
