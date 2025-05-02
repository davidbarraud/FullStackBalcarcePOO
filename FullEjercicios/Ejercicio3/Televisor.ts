class Televisor {
    private marca: string
    private volumen: number ;
    private canal: number ;
    private encendido: boolean ;
    private mute: boolean;
   
    public constructor(marca: string) {
        this.marca = marca;
        this.volumen = 0;
        this.canal = 1;
        this.encendido = false;
        this.mute = false;
    }

 
    public switchPower(): void {
        if (this.encendido== true) {
            console.log(`El televisor está apagado`);            
        } else {
            console.log(`El televisor está encendido`);
        }
        this.encendido = !this.encendido;
    }
    
    public info(): void {
        console.log(`Marca: ${this.marca} -----------\n`)
        
    }
    
    public aumentarCanal(num:number): void {
        if (this.canal + num > 99) {
            this.canal = 1;
            console.log(`El canal actual es el  ${this.canal}.`);
        } else {
            this.canal += num;
            console.log(`El canal actual es el  ${this.canal}.`);
        }
    }

    public disminuirCanal(num:number): void {
        if (this.canal - num < 1) {
            this.canal = 99;
            console.log(`El canal actual es el  ${this.canal}.`);
        } else {
            this.canal -= num;
            console.log(`El canal actual es el  ${this.canal}.`);
        }
    }
    
    public cambiarMutear():void{
        this.mute = !this.mute;
    }

    public subirVolumen(): void {
      if (this.mute === true) {
        console.log(`El televisor está muteado.`);
      } else {
        if (this.volumen === 99 ) {
          return        
         } else {
          this.volumen +=1;
          console.log(`El volumen actual es  ${this.volumen}.`);
         }
      }
    }

    public bajarVolumen(): void {
        if (this.mute === true) {
            console.log(`El televisor está muteado.`);
        } else {
            if (this.volumen ===0 ) {
              return       
            } else {
             this.volumen -=1;
             console.log(`El volumen actual es  ${this.volumen}.`);
            }
        }
     }



}

const tv1 = new Televisor("Samsung");
tv1.switchPower();
tv1.switchPower();
tv1.info();
tv1.aumentarCanal(5);
tv1.aumentarCanal(30);
tv1.disminuirCanal(2);
tv1.aumentarCanal(45);
tv1.aumentarCanal(30);
tv1.disminuirCanal(2);
tv1.disminuirCanal(2);
tv1.subirVolumen();
tv1.subirVolumen();
tv1.bajarVolumen();
tv1.cambiarMutear();
tv1.subirVolumen();
tv1.bajarVolumen();
tv1.cambiarMutear();
tv1.subirVolumen();
tv1.bajarVolumen();