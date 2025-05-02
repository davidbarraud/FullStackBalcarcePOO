import { Marca } from "./Marca";
// Se crea la superclase Aparato.
export class Aparato{
    protected tipo: string;
    protected marca : Marca;
    private volumen: number;
    private encendido: boolean;
    
    constructor(tipo: string, marca:Marca){
        this.tipo = tipo;
        this.volumen = 0;
        this.marca = marca;  
        this.encendido = false;   
    }
        
    public estado():void{
        console.log((this.encendido) ? "Este aparato está encendido" : "Este aparato está apagado");
    }

    public encender(): void {
        this.encendido= true;
    }

    public apagar(): void {
        this.encendido= false;
    }

    //Método que va a ser cambiado por medio de poliorfismo en las otras clases
    public info(): void {
        console.log(`El Aparato del tipo ${this.tipo} es de marca ${this.marca.getMarca()}`);
    }

    }
