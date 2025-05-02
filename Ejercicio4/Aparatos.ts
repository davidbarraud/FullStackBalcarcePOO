import { Aparato } from "./Aparato";
import { Computadora } from "./Computadora";
import { Minicomponente } from "./Minicomponente";
import { Marca } from "./Marca";


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