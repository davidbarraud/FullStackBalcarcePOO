//Clase LectoraDvd que va a ser usada a través de Composición en las Clases Computadora y Minicomponente
export class LectoraDvd {
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
