// Se crea la superclase Aparato.
class Aparato{
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

//Clase Marca que va a ser usada a través de Composición en la superclase Aparato
class Marca {
    protected marca: string;
    constructor(marca:string) {
        this.marca = marca;
    }
    
    public getMarca():string{
        return this.marca;
    }   
}

//Clase LectoraDvd que va a ser usada a través de Composición en las Clases Computadora y Minicomponente
class LectoraDvd {
    private abierta: boolean;
    constructor() {
        this.abierta = false;
    }
    
    //Al presionar el botón de abrir la lectora, si se encuentra abierta, se procede a cerrar y si esta cerrada, se procede a abrir.
    public abrirLectora():void{
        if (this.abierta) {
            console.log("La lectora ya está abierta, procediendo a cerrar...");
            this.abierta = false;
        } else {
            console.log("La lectora está cerrada, procediendo a abrir...");
            this.abierta = true;
        }

    }

    public getEstado():void{
        console.log((this.abierta) ? "La lectora DVD está abierta" : "La lectora DVD está cerrada");
    }   
}


//Clase Computadora
class Computadora extends Aparato {
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


//Clase Micicomponente
class Minicomponente extends Aparato {
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

// Creando las Instancias de las clases
const marcaDell = new Marca("Dell");
const marcaSony = new Marca("Sony");
const marcaAparato = new Marca("Electrodoméstico");

const nuevaPC = new Computadora("Notebook", marcaDell, 16, "Intel i7");
const nuevoStereo = new Minicomponente("Casetera", marcaSony);
const nuevoAparato = new Aparato("Aparato", marcaAparato);

//Probando el funcionamiento

//instancia de Computadora
nuevaPC.info();
nuevaPC.encender();
nuevaPC.estado();
nuevaPC.apagar();
nuevaPC.estado();
nuevaPC.lectora.abrirLectora();
nuevaPC.lectora.abrirLectora();
nuevaPC.lectora.getEstado();
console.log(`-------------------- \n`);

// Instancia de Minicomponente
nuevoStereo.info();
nuevoStereo.encender();
nuevoStereo.estado();
nuevoStereo.apagar();
nuevoStereo.estado();
nuevoStereo.avanzarCasette(10);
nuevoStereo.avanzarCasette(15);
nuevoStereo.avanzarCasette(30);
nuevoStereo.avanzarCasette(40);
nuevoStereo.retrocederCasette(15);
nuevoStereo.retrocederCasette(60);
console.log(`-------------------- \n`);

// Instancia de Aparato
nuevoAparato.info();
nuevoAparato.encender();
nuevoAparato.estado();
nuevoAparato.apagar();
nuevoAparato.estado();