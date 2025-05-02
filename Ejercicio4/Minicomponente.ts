import { Aparato } from "./Aparato";
import { Marca } from "./Marca";
import { LectoraDvd } from "./LectoraDvd";

//Clase Micicomponente
export class Minicomponente extends Aparato {
    protected lectora: LectoraDvd; 
    private minutos: number;
   

    constructor(tipo:string, marca: Marca) {
        super(tipo, marca);
        this.lectora = new LectoraDvd;
        this.minutos = 0;
        
    }
        
    public info(): void {
        console.log(`El Minicomponente del tipo ${this.tipo} es de marca ${this.marca.getMarca()}`);
    }

    public avanzarCasette(num:number){
        if (num + this.minutos > 60 ) {
            console.log("No se puede avanzar más de 60 minutos del casette");
                       
        } else {
            let actual:number  = this.minutos +=num;
            console.log(`Avanzando ${num} minutos en el casette. La marca actual está en ${actual} minutos`);
        }
    }

    public retrocederCasette(num:number){
        if ( this.minutos - num > 0) {
            let actual:number  = this.minutos -=num;
            console.log(`Retrocediendo ${num} minutos en el casette. La marca actual está en ${actual} minutos`);
            
        } else {
            console.log("El casette se ha rebobinado completamente");
        }
    }

}