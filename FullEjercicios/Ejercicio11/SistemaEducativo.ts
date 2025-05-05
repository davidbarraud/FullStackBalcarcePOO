/* 11-Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus alumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es
mayor que 7).
• La escuela debe tener un registro de los alumnos y maestros, y debe poder
matricular/contratar y expulsar/despedir a los mismos. */
//Importamos la Superclase Persona
import { Persona } from "../Ejercicio2/Persona";

//Clase Alumno
class Alumno extends Persona{
    protected nota: number;
        
    constructor(nombre: string, apellido: string,  edad: number, dni: number, nota :number){
        super(nombre, apellido, edad, dni);
        this.nota = nota;
         
    }
        
    //Método que va a ser cambiado por medio de polimorfismo en las otras clases
    public mostrarInfo(): void {
         console.log(`El alumno se llama  ${this.nombre} ${this.apellido}, tiene ${this.edad} años, su DNI es: ${this.dni} y la nota es: ${this.nota} (${this.nota >= 7 ? "Aprobado" : "Desaprobado"}) `);
       
        
    }
//Método para obtener el DNI
public getDni(): number {
    return this.dni;
}

//Método para obtener el nombre 
public getNombre(): string {
    return this.nombre + this.apellido;
}


}


//Clase Profesor
class Profesor extends Persona{
    private alumnos: Alumno[];
    constructor(nombre: string, apellido: string,  edad: number, dni: number){
        super(nombre, apellido, edad, dni);
        this.alumnos = [];
    }
        
    //Polimosfismo de la clase Persona
    public mostrarInfo(): void {
        console.log(`El profesor se llama  ${this.nombre} ${this.apellido}, tiene ${this.edad} años y su DNI es: ${this.dni}. \n`);
        
    }

    //Método para obtener el nombre 
public getNombre(): string {
    return this.nombre + this.apellido;
}


    public asignarAlumno(alumno: Alumno):void{
        console.log(`=======================================`);
        console.log(`Asignando Alumno a la lista del profesor`);
        this.alumnos.push(alumno);
        console.log(`El alumno ${alumno.getNombre()} fue agregado a la lista.\n`);
    }

    public listarAlumnos(): void {
        console.log(`=======================================`);
        console.log(`Lista de Alumnos de ${this.nombre} ${this.apellido}:`);
        this.alumnos.forEach(alum => {
            alum.mostrarInfo();
        });
    }

    public quitarAlumno(dni: number): void {
        console.log(`=======================================`);
        console.log(`Quitando Alumno de la lista del profesor`);
        const indice = this.alumnos.findIndex(elem=> elem.getDni()=== dni);
        if (indice !== -1) {
            this.alumnos.splice(indice, 1);
            console.log(`El alumno cuyo DNI es: ${dni} fue eliminado de la lista.\n`);
        } else {
            console.log(`No se encuentra el DNI: ${dni} en la lista.\n`);
        }
    }

}


//Clase Colegio
class Colegio{
    private nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];
    constructor(nombre: string){
        this.nombre = nombre;
        this.alumnos = [];
        this.profesores = [];
    }
        
    //Polimosfismo de la clase Persona
    public mostrarInfo(): void {
        console.log(`=======================================`);
        console.log(`Colegio ${this.nombre}. \n`);
        console.log(`=======================================`);
        
    }

// Sección para el alumno
    public matricularAlumno(alumno: Alumno):void{
        console.log(`=======================================`);
        console.log(`Matriculando Alumno en el colegio`);
        this.alumnos.push(alumno);
        console.log(`El alumno ${alumno.getNombre()} fue matriculado con exito.\n`);
    }

    public listarAlumnos(): void {
        console.log(`=======================================`);
        console.log(`Lista de Alumnos del coleio ${this.nombre}:`);
        this.alumnos.forEach(alum => {
            alum.mostrarInfo();
        });
    }

    public expulsarAlumno(dni: number): void {
        console.log(`=======================================`);
        console.log(`Quitando Alumno`);
        const indice = this.alumnos.findIndex(elem=> elem.getDni()=== dni);
        if (indice !== -1) {
            this.alumnos.splice(indice, 1);
            console.log(`El alumno cuyo DNI es: ${dni} fue expulsado del colegio.\n`);
        } else {
            console.log(`No se encuentra el DNI: ${dni} en la lista.\n`);
        }
    }


// Sección para el profesor
public contratarProfesor(profesor: Profesor):void{
    console.log(`=======================================`);
    console.log(`Contratando Profesor en el colegio`);
    this.profesores.push(profesor);
    console.log(`El profesor ${profesor.getNombre()} fue contratado con exito.\n`);
}

public listarProfesores(): void {
    console.log(`=======================================`);
    console.log(`Lista de Profesores del coleio ${this.nombre}:`);
    this.profesores.forEach(profe => {
        profe.mostrarInfo();
    });
}

public despedirProfesor(dni: number): void {
    console.log(`=======================================`);
    console.log(`Despidiendo Profesor del colegio`);
    const indice = this.profesores.findIndex(elem=> elem.getDni()=== dni);
    if (indice !== -1) {
        this.profesores.splice(indice, 1);
        console.log(`El profesor cuyo DNI es: ${dni} fue despedido del colegio.\n`);
    } else {
        console.log(`No se encuentra el DNI: ${dni} en la lista.\n`);
    }
}

}

//Implementación
const escuela = new Colegio("José Hernández");

const alumno1 = new Alumno("Lucía", "Hernandez", 15, 49678555, 8);
const alumno2 = new Alumno("Claudio", "Paredes", 13, 43555777, 2);
const alumno3 = new Alumno("Pamela", "Castillo", 17, 26999000, 7);
const alumno4 = new Alumno("Chuck", "Norris", 10, 25111333, 10);
const alumno5 = new Alumno("Marty", "McFly", 12, 42555789, 6);



const profe1 = new Profesor("Susana", "Coria", 33, 32934763);
const profe2 = new Profesor("Marcelo", "Chavez", 45, 27222999);

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);
escuela.matricularAlumno(alumno5);

escuela.contratarProfesor(profe1);
escuela.contratarProfesor(profe2);

profe1.asignarAlumno(alumno1);
profe1.asignarAlumno(alumno5);
profe1.listarAlumnos();

profe2.asignarAlumno(alumno1);
profe2.asignarAlumno(alumno2);
profe2.asignarAlumno(alumno3);
profe2.asignarAlumno(alumno4);
profe2.asignarAlumno(alumno5);
profe2.listarAlumnos();

escuela.listarAlumnos();
escuela.listarProfesores();

profe2.quitarAlumno(26999000);
profe2.quitarAlumno(42555789);
profe2.quitarAlumno(4255);
profe2.listarAlumnos();