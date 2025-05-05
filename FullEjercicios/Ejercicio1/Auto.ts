/* 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas
y métodos. Implementar en TypeScript */
class Automovil {
    //Propiedades
    private marca: string;
    private modelo: string;
    private anio: number;
    private encendido: boolean = false
   
    //Constructor
    public constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.encendido = false;
    }


    public encenderApagar(): void {
        this.encendido = !this.encendido;
    }
   

    public mostrarInfo(): void {
        if (this.encendido === false) {
            return
        } else {
            console.log(`
                Marca: ${this.marca} 
                Modelo: ${this.modelo}
                Año: ${this.anio}
                
                -----------\n`)
        }
    }
    

}

const miAuto = new Automovil("Ford", "Ambiente 1.6", 2008);

miAuto.encenderApagar();
miAuto.mostrarInfo();
