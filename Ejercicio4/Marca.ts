//Clase Marca que va a ser usada a través de Composición en la superclase Aparato
export class Marca {
    protected marca: string;
    constructor(marca:string) {
        this.marca = marca;
    }
    
    public getMarca():string{
        return this.marca;
    }   
}