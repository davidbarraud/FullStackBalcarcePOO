/* 4-Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
• Un constructor que reciba dos parámetros: ancho y altura.
• Métodos para calcular el área y el perímetro del rectángulo.
• El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
• El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho +
altura)).
Una vez definida la clase Rectangulo, crea una instancia de esta clase
con un ancho de 5 unidades y una altura de 10 unidades. Luego,
utiliza los métodos de la clase para calcular el área y el perímetro del
rectángulo creado e imprime los resultados. */

class Rectangulo {
    //Propiedades
    private ancho: number;
    private alto: number;
    
    //Constructor
    public constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
        
    }


    public calcularArea(): void {
        let area: number = this.ancho * this.alto;
        console.log (`El area del rectangulo es: ${area} \n`);
    }

    public calcularPerimetro(): void {
        let perimetro:number = 2 * (this.ancho + this.alto);
        console.log (`El perimetro del rectangulo es: ${perimetro} \n`);
    }
   
    public mostrarInfo(): void {
            console.log(`
                Alto: ${this.alto} 
                Altura: ${this.ancho}
               -----------\n`)
        
    }
    

}

const miRectangulo = new Rectangulo(5, 10);
miRectangulo.mostrarInfo();
miRectangulo.calcularArea();
miRectangulo.calcularPerimetro();