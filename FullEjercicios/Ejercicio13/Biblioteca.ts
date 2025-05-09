/* 13- Usando la clase libro del ejercicio 5, simular el funcionamiento de un sistema para gestionar
una colección de libros, permitiendo realizar las operaciones básicas: alta, baja, modificación y
consulta.

La clase Gestor de Libros debe permitir realizar las siguientes acciones:
• Insertar un libro: agregar un nuevo libro a la colección.
• Consultar un libro: buscar un libro y mostrar sus datos.
• Modificar un libro: cambiar los datos de un libro ya existente (por ejemplo: autor, año, etc.).
• Eliminar un libro: realizar una baja lógica, es decir, el libro no se borra definitivamente, sino que
se marca como inactivo o dado de baja.
Consideraciones importantes:
• Antes de realizar cualquier operación (incluso insertar), se debe verificar si el libro ya existe en
la colección.

• El estado de cada libro (activo o dado de baja) debe formar parte de la clase Libro, */
import * as readlineSync from 'readline-sync';
import { Libro } from "../Ejercicio5/Libro";

class Biblioteca {
    private nombre: string;
    private listaLibros: Libro[] ;
    constructor(nombre:string) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
/**
 * crearLibros va solicitando al usuario por medio del while los datos pedidos en el método cargarLibros de la clase Libro
 * luego agrega cada libro en el array listaLibros por medio de push.
 * El campo activo se va creando solo con el dato 1 asignado.
 * Para crear el emoji, se usa la tecla Windows más el punto.
 */
public crearLibros() {
    console.log(`=======================================`);
    console.log(`Creando libros`);
    let continuar = "s";
    while (continuar.toLowerCase() === "s") {
        const nuevoLibro = new Libro();
        nuevoLibro.cargarLibro();
        const libroEncontrado = this.listaLibros.find(elem=> elem.getIsbn() === nuevoLibro.getIsbn());
        if (libroEncontrado) {
            console.log("❌ El ISBN ya existe. No se puede agregar el libro duplicado."); 
        } else {
            this.listaLibros.push(nuevoLibro);
            console.log("✅ Libro agregado correctamente. 📗");
            
        }

        continuar = readlineSync.question("Desea agregar otro libro? (s/n): \n");
    }
}

/**
 * nostrarLibros: revisa en el array librosActivos y filtar por campo activo de que sea igual a 1
 * Luego recorre el array con forEach y llama al método info de la clase Libro.
 */
public mostrarLibros() {
    console.log(`=======================================`);
    console.log(`Mostrando los libros de la Biblioteca`);
    const librosActivos = this.listaLibros.filter(libro => libro.getActivo() === 1);
    librosActivos.forEach(libro => {
    libro.info();
    });
}

public mostrarLibrosDesactivados() {
    console.log(`=======================================`);
    console.log(`Mostrando los libros Desactivados`);
    const librosActivos = this.listaLibros.filter(libro => libro.getActivo() === 0);
    librosActivos.forEach(libro => {
    libro.info();
    });
}


/**
 * modificarLibro: ingresa el isbn, lo busca en el array de listaLibros, si lo encuentra, le pide los datos al usuario
 * y si no lo encuentra arroja un mensaje de error.
 */
public modificarLibro(isbn: string) {
    console.log(`=======================================`);
    console.log(`Modificando el libro con el ISBN: ${isbn}`);
    let libroEncontrado = this.listaLibros.find(elem=> elem.getIsbn() === isbn);
    let titulo: string ="";
    let autor: string = "";
    let anio: number = 0;
    let paginas: number =0;

    if (libroEncontrado) {
        //muestra los datos del libro para que pueda ver lo que desea modificar.
        libroEncontrado.info();
        // pide al usuario que cargue los datos.        
            titulo = readlineSync.question("Ingrese el titulo del libro: ");
            autor = readlineSync.question("Ingrese el autor del libro: ");
            anio = parseInt(readlineSync.question("Ingrese el anio de publicacion: "));
            paginas = parseInt(readlineSync.question("Ingrese el numero de paginas: "));
            libroEncontrado.actualizarLibro(titulo, autor, anio, paginas);
            console.log("✅ El libro fue actualizado."); 
    } else {
        console.log("❌ El ISBN no existe. Ingrese un ISBN válido."); 
    }
}

/**
 * modificarLibro: ingresa el isbn, lo busca en el array de listaLibros, si lo encuentra, le pide los datos al usuario
 * y si no lo encuentra arroja un mensaje de error.
 */
public eliminarLibro(isbn: string) {
    console.log(`=======================================`);
    console.log(`Desactivando el libro con el ISBN: ${isbn}`);
    let libroEncontrado = this.listaLibros.find(elem=> elem.getIsbn() === isbn);
    
    if (libroEncontrado) {  
        libroEncontrado.desactivarLibro();
        console.log("✅ El libro fue desactivado."); 
    } else {
        console.log("❌ El ISBN no existe. Ingrese un ISBN válido."); 
        
    }
}

public reactivarLibro(isbn: string) {
    console.log(`=======================================`);
    console.log(`Ractivando el libro con el ISBN: ${isbn}`);
    let libroEncontrado = this.listaLibros.find(elem=> elem.getIsbn() === isbn);
    
    if (libroEncontrado) {  
        libroEncontrado.activarLibro();
        console.log("✅ El libro fue activado."); 
    } else {
        console.log("❌ El ISBN no existe. Ingrese un ISBN válido."); 
        
    }
}


public info(){
    console.log(`=======================================`);
    console.log(`Bienvenidos a la Biblioteca ${this.nombre}`);
}
}

const biblioteca1 = new Biblioteca("Domingo Faustino Sarmiento");
biblioteca1.info();
//Se van a crear 4 libros con los isbn: 111-111, 222-222, 333-333 y 444-444
biblioteca1.crearLibros();
// se muestran los libros creados
biblioteca1.mostrarLibros();
// se van a eliminar 2 libros: el segundo y el cuarto
biblioteca1.eliminarLibro("222-222");
biblioteca1.eliminarLibro("444-444");
biblioteca1.mostrarLibros();
// también se muestran los libros eliminados o desactivados
biblioteca1.mostrarLibrosDesactivados();
// se reactiva el libro 444-444
biblioteca1.reactivarLibro("444-444");
biblioteca1.mostrarLibros();
//modificamos los datos del libro 444-444
biblioteca1.modificarLibro("444-444");
biblioteca1.mostrarLibros();