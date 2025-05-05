/* 10-Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con
métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existentes */
//importamos los datos de la clase Automotor
import { Automovil } from "../Ejercicio1/Auto";

//Clase Registro del Automotor
class RegistroAutomotor {
    //Se crea un arreglo del tipo Automovil para guardar los autos creados
    private autos: Automovil[];
    private nombre: string;

    public constructor(nombre:string) {
        this.nombre= nombre;
        this.autos = [];
        
    }


public info():void {
    console.log(`=======================================`);
    console.log(`Registro automotor de: ${this.nombre}. `);
    console.log(`======================================= \n`);
}

public mostrarRegistros():void {
    console.log(`=======================================`);
    console.log(`Mostrando todos los registros`);
    console.log(`=======================================`);
    for (let i = 0; i < this.autos.length; i++) {
        this.autos[i].mostrarInfo();
        
    }
}

//Métodos
/* // Agregar un auto. Se busca la patente del automovil ingresado dentro del array de autos con
el método find. Si encuentra coincidencia, la devuelve, sino retorna undefined */
public agregarAuto(auto: Automovil): void {
    console.log(`=======================================`);
    console.log(`Agregando Registro`);
    const autoEncontrado = this.autos.find(elem=> elem.getPatente()=== auto.getPatente());
    if (autoEncontrado) {
        console.log(`Ya existe un auto registrado con la patente: "${auto.getPatente()}". No se puede agregar.\n`);
    } else {
        this.autos.push(auto);
        console.log(`Se agregó un nuevo auto con la patente: "${auto.getPatente()}".\n`);
    }
}

/* Para actualizar los datos del auto, se ingresan los mismos, luego se hace una busqueda
de la patente ingresada. Si se encuentra, se asigna a la variable autoEncontrado los datos de la 
posición del array que coincide con patente, o sea, en cierta forma es un objeto auto por lo que accede a los
métodos de esa clase. Por eso se puede llamar actualizarDatos y mostrarInfo */
public actualizarAuto(marca:string, modelo:string, anio:number, patente:string): void {
    console.log(`=======================================`);
    console.log(`Actualizando Registro`);
    const autoEncontrado = this.autos.find(elem=> elem.getPatente()=== patente);
    if (autoEncontrado) {
        autoEncontrado.actualizarDatos(marca, modelo, anio);
        console.log(`Se actualizaron los datos del auto con la patente: ${patente}.\n`);
        autoEncontrado.mostrarInfo();
    } else {
        console.log(`El registro con la patente: ${patente} no existe.\n`);
    }
}

/* Lo que hae este método es solicitar el número de patente.
Con ese número se usa el método findIndex para determinar el índice del array que coincide con
la patente buscada. Si no se encuentra el índice, devuelve -1
El método splice lo que hace es buscar el índice y elimina la cantidad de posiciones pasada por el parametro 1. */
public eliminarAuto(patente: string): void {
    console.log(`=======================================`);
    console.log(`Eliminando registro`);
    const indice = this.autos.findIndex(elem=> elem.getPatente()=== patente);
    if (indice !== -1) {
        this.autos.splice(indice, 1);
        console.log(`El auto con la patente: ${patente} fue eiminado del registro.\n`);
    } else {
        console.log(`No se encuentra la patente ${patente} en el registro.\n`);
    }
}

/* Para buscar el auto se solicita la patente y se usan méttodos similares a los descritos anteriormente*/
public buscarAuto(patente:string): void {
    console.log(`=======================================`);
    console.log(`Buscando registro`);
    const autoEncontrado = this.autos.find(elem=> elem.getPatente()=== patente);
    if (autoEncontrado) {
        autoEncontrado.mostrarInfo();
    } else {
        console.log(`No hemos podido encontrar el auto con la patenta: ${patente}.\n`);
    }
}

}

const registro1 = new RegistroAutomotor("Balcarce");

const auto1 = new Automovil("Ford", "Fiesta", 2008, "AAA111");
const auto2 = new Automovil("Peugeot", "208", 2015, "BBB222");
const auto3 = new Automovil("Citroen", "Elisyum", 2020, "BBB222");
const auto4 = new Automovil("Citroen", "Elisyum", 2020, "CCC333");
const auto5 = new Automovil("Fiat", "Espacio", 1994, "DDD444");

registro1.info();

// Se agregan los autos al registro
registro1.agregarAuto(auto1);
registro1.agregarAuto(auto2);

//como los autos están apagados, se los enciende.
auto1.encenderApagar();
auto2.encenderApagar();

//se muestran los datos de los autos
auto1.mostrarInfo();
auto2.mostrarInfo();

registro1.agregarAuto(new Automovil("Ford", "Fiesta", 2010, "AAA111"));
registro1.agregarAuto(auto3);
registro1.agregarAuto(auto4);
registro1.agregarAuto(auto5);
registro1.mostrarRegistros();
registro1.actualizarAuto("Citroen", "Elisyum", 2022, "BBB222");
registro1.actualizarAuto("Citroen", "Elisyum", 2022, "BBB444");
registro1.buscarAuto("BBB222");
registro1.buscarAuto("GGGG");
registro1.eliminarAuto("GGGGGG");
registro1.eliminarAuto("BBB222");
registro1.mostrarRegistros();

