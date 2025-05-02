import { LectoraDvd } from "./LectoraDvd";
import { Aparato } from "./Aparato";
import { Marca } from "./Marca";

//Clase Computadora
export class Computadora extends Aparato {
    private memoria:number;
    private microprocesador: string;
    public lectora: LectoraDvd;
    constructor(tipo:string, marca:Marca, memoria:number, microprocesador:string) {
        super(tipo, marca);
        this.memoria= memoria;
        this.microprocesador = microprocesador;
        this.lectora = new LectoraDvd;
        
    }
    public info(): void {
        console.log(`La Computadora del tipo ${this.tipo} es de marca ${this.marca.getMarca()}, tiene ${this.memoria}GB de Ram y un micro ${this.microprocesador} `);
    }
}
