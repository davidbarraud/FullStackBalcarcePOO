/* 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas
y métodos. Implementar en TypeScript */
export class Automovil {
    //Propiedades
    private marca: string;
    private modelo: string;
    private anio: number;
    private encendido: boolean = false
    private patente: string;
   
    //Constructor
    public constructor(marca: string, modelo: string, anio: number, patente:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.encendido = false;
        this.patente = patente;
    }


    public encenderApagar(): void {
        this.encendido = !this.encendido;
        if (this.encendido) {
            console.log(`El auto está encendido`);            
        } else {
            console.log(`El auto está apagado`);
        }
    }
   
    public getPatente(): string {
        return this.patente ;
    }

    public actualizarDatos(marca:string, modelo:string, anio:number): void {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
   
   

    public mostrarInfo(): void {
        console.log(`
                Marca: ${this.marca} 
                Modelo: ${this.modelo}
                Año: ${this.anio}
                Patente: ${this.patente}
                
                -----------\n`)
        
    }
    

}

//Probar descomentando las líneas de abajo

/* const miAuto = new Automovil("Ford", "Ambiente 1.6", 2008, "AAA111");
miAuto.encenderApagar();
miAuto.mostrarInfo(); */
