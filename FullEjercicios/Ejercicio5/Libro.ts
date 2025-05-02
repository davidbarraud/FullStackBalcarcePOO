/**
 * 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos
métodos.
 */
// importamos la librería ReadLineSync para capturar las entradas por consola
import * as readlineSync from 'readline-sync';

class Libro {
    //Propiedades
    private titulo: string;
    private autor: string;
    private isbn: string;
    private paginas: number;
    
    //Constructor
public constructor() {
        this.titulo = "";
        this.autor  = "";
        this.isbn   = "";
        this.paginas= 0;
}

//Cargar libro a través de lo que ingresa el usuario.
public cargarLibro(): void {
        this.titulo = readlineSync.question("Ingrese el titulo del libro: ");
        this.autor = readlineSync.question("Ingrese el autor del libro: ");
        this.isbn = readlineSync.question("Ingrese el ISBN del libro: ");
        this.paginas = parseInt(readlineSync.question("Ingrese el numero de paginas: "));
}

public info(): void {
        console.log (`Datos del Libro ingresado
                        Título: ${this.titulo}.             
                        Autor: ${this.autor}.
                        ISBN: ${this.isbn}.
                        Páginas: ${this.paginas}.
                         \n`);
}

}

// Crear instancias y probar
 const libro1 = new Libro();
const libro2 = new Libro();

console.log("Carga del primer libro:");
libro1.cargarLibro();

console.log("\nCarga del segundo libro:");
libro2.cargarLibro();

console.log("\n Información de los libros:");
libro1.info();
libro2.info();
 

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