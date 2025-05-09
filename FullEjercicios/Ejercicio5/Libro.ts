/**
 * 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos
métodos.
 */
// importamos la librería ReadLineSync para capturar las entradas por consola
import * as readlineSync from 'readline-sync';

export class Libro {
    //Propiedades
    private titulo: string;
    private autor: string;
    private isbn: string;
    private paginas: number;
    private activo: number;
    private anio: number;
    
    //Constructor
public constructor() {
        this.titulo = "";
        this.autor  = "";
        this.isbn   = "";
        this.paginas= 0;
        this.anio = 1;
        this.activo =1;
}

public info(): void {
        console.log (`Datos del Libro:
                        Título: ${this.titulo}.             
                        Autor: ${this.autor}.
                        ISBN: ${this.isbn}.
                        Año publicación: ${this.anio}. 
                        Páginas: ${this.paginas}.
                         \n`);
}
//Cargar libro a través de lo que ingresa el usuario.
public cargarLibro(): void {
        this.titulo = readlineSync.question("Ingrese el titulo del libro: ");
        this.autor = readlineSync.question("Ingrese el autor del libro: ");
        this.isbn = readlineSync.question("Ingrese el ISBN del libro: ");
        this.anio = parseInt(readlineSync.question("Ingrese el anio de publicacion: "));
        this.paginas = parseInt(readlineSync.question("Ingrese el numero de paginas: "));
}

//Actualiza los datos del libro cuando se lo llama desde algún método
public actualizarLibro(titulo: string, autor:string, anio: number, paginas: number): void {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.paginas = paginas;
}

public desactivarLibro(): void {
        this.activo = 0;
}

public activarLibro(): void {
        this.activo = 1;
}

/**
 * getActivo: devuelve el estado del libro, puede ser activo= 1 o desactivo=0;
 :number*/
public getActivo():number {
        return this.activo;
}

/**
 * getIsbn: retorna el campo ISBN para usarlo en algún método.
 */
public getIsbn() : string{
        return this.isbn;
}

}

// Crear instancias y probar
// DESCOMENTAR ESTA PARTE PARA PROBAR
/*  const libro1 = new Libro();
const libro2 = new Libro();

console.log("Carga del primer libro:");
libro1.cargarLibro();

console.log("\nCarga del segundo libro:");
libro2.cargarLibro();

console.log("\n Información de los libros:");
libro1.info();
libro2.info(); */
 




/*
//Otra forma de hacerlo automáticamente sería utilizar un array para guardar los libros
const listaLibros: Libro[] = [];

let continuar = "s";
while (continuar.toLowerCase() === "s") {
  const nuevoLibro = new Libro();
  nuevoLibro.cargarLibro();
  listaLibros.push(nuevoLibro);

  continuar = readlineSync.question("Desea agregar otro libro? (s/n): \n");
}

// Mostrar todos los libros ingresados
console.log("\n Libros ingresados:");
listaLibros.forEach((libro, index) => {
  console.log(`\n Libro #${index + 1}:`);
  libro.info();
});
*/