//9- Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 2.

export class Decodificador {
    private canal: number ;
       
    public constructor() {
        this.canal = 1;
       
    }
    
    public aumentarCanal(num:number): void {
        if (this.canal + num > 99) {
            this.canal = 1;
            console.log(`Aumentando de canal ======.`);
            console.log(`El canal actual es el ${this.canal}.\n`);
        } else {
            this.canal += num;
            console.log(`Aumentando de canal ======.`);
            console.log(`El canal actual es el ${this.canal}.\n`);
        }
    }

    public disminuirCanal(num:number): void {
        if (this.canal - num < 1) {
            this.canal = 99;
            console.log(`Disminuyendo de canal ======.`);
            console.log(`El canal actual es el ${this.canal}.\n`);
        } else {
            this.canal -= num;
            console.log(`Disminuyendo de canal ======.`);
            console.log(`El canal actual es el ${this.canal}.\n`);
        }
    }
    
   

}