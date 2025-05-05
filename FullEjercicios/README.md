# FullStackBalcarcePOO
# Proyecto TypeScript: Clases y Métodos

Este repositorio contiene ejemplos de clases en TypeScript que representan diferentes objetos del mundo real: un automóvil, una persona, un televisor y un rectángulo. Cada clase tiene sus propias propiedades y métodos que permiten simular comportamientos específicos.

---

## 🚗 Clase `Automovil`

Representa un auto con marca, modelo y año.

### Propiedades:
- `marca: string`
- `modelo: string`
- `anio: number`
- `encendido: boolean` (por defecto `false`)

### Métodos:
- `encenderApagar()`: Alterna el estado del auto entre encendido y apagado.
- `mostrarInfo()`: Muestra por consola la información del auto solo si está encendido.

---

## 🧍 Clase `Persona`

Simula una persona con nombre, apellido y edad.

### Propiedades:
- `nombre: string`
- `apellido: string`
- `edad: number`

### Métodos:
- `mostrarInfo()`: Muestra por consola el nombre completo.
- `esMayor()`: Indica si la persona es mayor o menor de edad.
- `correr()`: Muestra un mensaje indicando que la persona puede correr.
- `comprar(producto: string, precio: number)`: Imprime un mensaje de compra con producto y precio.

---

## 📺 Clase `Televisor`

Simula un televisor con controles de canal, volumen, encendido y mute.

### Propiedades:
- `marca: string`
- `volumen: number` (inicia en 0)
- `canal: number` (inicia en 1)
- `encendido: boolean` (inicia en `false`)
- `mute: boolean` (inicia en `false`)

### Métodos:
- `switchPower()`: Cambia el estado de encendido del televisor e imprime su estado.
- `info()`: Muestra la marca del televisor.
- `aumentarCanal(num: number)`: Aumenta el canal en la cantidad indicada, reinicia a 1 si supera 99.
- `disminuirCanal(num: number)`: Disminuye el canal, reinicia a 99 si baja de 1.
- `cambiarMutear()`: Alterna el estado de mute.
- `subirVolumen()`: Aumenta el volumen si no está muteado y no supera 99.
- `bajarVolumen()`: Disminuye el volumen si no está muteado y no es 0.

---

## 🟥 Clase `Rectangulo`

Modela un rectángulo y permite calcular sus propiedades geométricas.

### Propiedades:
- `ancho: number`
- `alto: number`

### Métodos:
- `calcularArea()`: Muestra el área del rectángulo.
- `calcularPerimetro()`: Muestra el perímetro del rectángulo.
- `mostrarInfo()`: Imprime los valores de alto y ancho.

---

## 📚 Clase Libro en TypeScript

Este proyecto implementa una clase llamada `Libro` en TypeScript, que permite cargar y mostrar información sobre libros ingresados por el usuario mediante consola.

## 📚 Descripción de la Clase

La clase `Libro` contiene los siguientes **atributos privados**:

- `titulo: string`
- `autor: string`
- `isbn: string`
- `paginas: number`

### 🛠️ Métodos

- `constructor()`: Inicializa los atributos con valores por defecto.
- `cargarLibro(): void`: Solicita al usuario que ingrese los datos del libro (título, autor, ISBN y número de páginas) utilizando `readline-sync`.
- `info(): void`: Muestra por consola todos los datos del libro cargado.

## 🧪 Uso

Se crean dos instancias de la clase `Libro`, y se llama a los métodos para:

1. Cargar los datos del libro desde la consola.
2. Mostrar la información cargada.

### 💡 Código de ejemplo de uso:

```ts
const libro1 = new Libro();
const libro2 = new Libro();

console.log("Carga del primer libro:");
libro1.cargarLibro();

console.log("\nCarga del segundo libro:");
libro2.cargarLibro();

console.log("\nInformación de los libros:");
libro1.info();
libro2.info();
```

# Clase 🧮 Calculadora en TypeScript

Este proyecto implementa una clase `Calculadora` en TypeScript, que permite realizar operaciones matemáticas básicas: suma, resta, multiplicación y división. Los resultados son mostrados directamente en consola.

## 🧮 Descripción de la Clase

La clase `Calculadora` posee un único atributo:

- `resultado: number` — almacena el resultado de la operación actual.

### 🛠️ Métodos

- `constructor()`: Inicializa `resultado` con el valor 0.
- `suma(num1: number, num2: number): void`: Suma dos números y muestra el resultado.
- `resta(num1: number, num2: number): void`: Resta dos números y muestra el resultado.
- `multiplicar(num1: number, num2: number): void`: Multiplica dos números. Si alguno es 0, lo informa especialmente.
- `dividir(num1: number, num2: number): void`: Divide dos números. Si alguno es 0, informa que la operación no se puede realizar.

## 🔢 Ejemplo de uso

El siguiente bloque de código muestra múltiples ejemplos de uso de la clase:

```ts
const operacion = new Calculadora();

operacion.suma(123, 2);
operacion.suma(100, 10);

operacion.resta(9, 5);
operacion.resta(487, 500);

operacion.multiplicar(10, 10);
operacion.multiplicar(0, 10);
operacion.multiplicar(10, 0);
operacion.multiplicar(5, 5);

operacion.dividir(10, 10);
operacion.dividir(0, 10);
operacion.dividir(10, 0);
operacion.dividir(99, 3);
operacion.dividir(8, 10);
```

### 🛠️ Requisitos
- TypeScript

### ▶️ Cómo ejecutar
Compilar los archivos `.ts` usando el compilador de TypeScript y luego ejecutar el archivo `.js` con Node.js.

```bash
tsc archivo.ts
node archivo.js

```

# Ejercicio 10 Proyecto Registro Automotor - TypeScript

Este proyecto simula un sistema básico de registro de automóviles utilizando **TypeScript** orientado a objetos. Está compuesto por dos clases principales:

- `Automovil` (en `Auto.ts`): representa un automóvil individual.
- `RegistroAutomotor` (en `RegistroAutomotor.ts`): gestiona el registro y operaciones sobre los automóviles.

---

## 📁 Archivo: `Auto.ts`

### Clase: `Automovil`

Contiene las propiedades y métodos relacionados con un solo automóvil.

#### Propiedades privadas:
- `marca`: marca del vehículo (ej: Ford).
- `modelo`: modelo del vehículo (ej: Fiesta).
- `anio`: año de fabricación.
- `encendido`: estado del motor (`true` o `false`).
- `patente`: número de patente (clave única para buscarlo).

#### Constructor:
Recibe `marca`, `modelo`, `anio`, y `patente`. Inicializa el auto como apagado.

#### Métodos públicos:
- `encenderApagar()`: alterna el estado `encendido` y muestra un mensaje por consola.
- `getPatente()`: devuelve la patente del auto.
- `actualizarDatos(marca, modelo, anio)`: actualiza los datos del auto (menos la patente).
- `mostrarInfo()`: imprime en consola la información completa del auto.

> Incluye un bloque comentado para probar la creación y uso de un `Automovil`.

---

## 📁 Archivo: `RegistroAutomotor.ts`

### Clase: `RegistroAutomotor`

Representa una base de datos interna (array) de autos registrados.

#### Propiedades:
- `autos`: array de objetos `Automovil`.
- `nombre`: nombre del registro (ej: "Balcarce").

#### Constructor:
Inicializa el registro con un nombre y un array vacío de autos.

#### Métodos:
- `info()`: imprime el nombre del registro.
- `mostrarRegistros()`: recorre e imprime todos los autos registrados.
- `agregarAuto(auto)`: agrega un auto si no existe otro con la misma patente.
- `actualizarAuto(marca, modelo, anio, patente)`: busca un auto por patente y actualiza sus datos.
- `eliminarAuto(patente)`: elimina un auto del array si la patente coincide.
- `buscarAuto(patente)`: busca e imprime la información del auto si se encuentra.

---

### 🧪 Código de prueba incluido

El archivo incluye una sección final con la siguiente funcionalidad:

- Se crean varios autos con distintos datos.
- Se agregan al registro (con manejo de duplicados).
- Se encienden algunos autos y se muestra su info.
- Se actualiza uno de los autos.
- Se realizan búsquedas por patente.
- Se eliminan registros por patente (incluyendo pruebas de eliminación fallida).
- Finalmente, se muestran todos los autos restantes en el registro.

---

## 🛠️ Requisitos para ejecución

- Tener instalado Node.js + TypeScript.
- Compilar los archivos `.ts` usando `tsc`.
- Ejecutar el archivo compilado con Node.js.

```bash
tsc Auto.ts RegistroAutomotor.ts
node RegistroAutomotor.js
```

# Ejercicio 11 Sistema Educativo

Este código TypeScript modela un sistema educativo con las siguientes características:

* **Profesores:** Mantienen una lista de sus alumnos asignados.
* **Alumnos:** Conocen su nota y pueden informar si están aprobados (nota mayor o igual a 7) o no.
* **Escuela (Colegio):** Gestiona un registro de alumnos y profesores, permitiendo la matriculación/contratación y expulsión/despido.

## Clases

### `Persona` (Importada)

Se asume que la clase `Persona` está definida en `../Ejercicio2/Persona.ts` y contiene propiedades básicas como `nombre`, `apellido`, `edad` y `dni`.  Esta clase es la superclase de `Alumno` y `Profesor`.

### `Alumno`

* **Propiedades:**
    * `nota`:  La nota del alumno.
* **Constructor:**
    * Inicializa un nuevo alumno con nombre, apellido, edad, DNI y nota.
* **Métodos:**
    * `mostrarInfo()`:  Muestra la información del alumno, incluyendo su estado de aprobación.
    * `getDni()`:  Retorna el DNI del alumno.
    * `getNombre()`: Retorna el nombre completo del alumno.

### `Profesor`

* **Propiedades:**
    * `alumnos`:  Un array de objetos `Alumno` que representa la lista de alumnos asignados al profesor.
* **Constructor:**
    * Inicializa un nuevo profesor con nombre, apellido, edad y DNI.  Inicializa la lista de alumnos como un array vacío.
* **Métodos:**
    * `mostrarInfo()`:  Muestra la información del profesor.
    * `getNombre()`: Retorna el nombre completo del profesor.
    * `asignarAlumno(alumno: Alumno)`:  Agrega un alumno a la lista de alumnos del profesor.
    * `listarAlumnos()`:  Muestra la información de todos los alumnos asignados al profesor.
    * `quitarAlumno(dni: number)`:  Elimina un alumno de la lista del profesor por su DNI.

### `Colegio`

* **Propiedades:**
    * `nombre`:  El nombre del colegio.
    * `alumnos`:  Un array de objetos `Alumno` que representa la lista de alumnos matriculados en el colegio.
    * `profesores`:  Un array de objetos `Profesor` que representa la lista de profesores contratados por el colegio.
* **Constructor:**
    * Inicializa un nuevo colegio con un nombre y listas de alumnos y profesores vacías.
* **Métodos:**
    * `mostrarInfo()`:  Muestra el nombre del colegio.

    * **Métodos para Alumnos:**
        * `matricularAlumno(alumno: Alumno)`:  Agrega un alumno a la lista de alumnos del colegio.
        * `listarAlumnos()`:  Muestra la información de todos los alumnos matriculados en el colegio.
        * `expulsarAlumno(dni: number)`:  Elimina un alumno de la lista de alumnos del colegio por su DNI.

    * **Métodos para Profesores:**
        * `contratarProfesor(profesor: Profesor)`:  Agrega un profesor a la lista de profesores del colegio.
        * `listarProfesores()`:  Muestra la información de todos los profesores contratados por el colegio.
        * `despedirProfesor(dni: number)`:  Elimina un profesor de la lista de profesores del colegio por su DNI.

## Implementación

El código incluye una sección de implementación que demuestra el uso de las clases:

1.  Se crea una instancia de `Colegio` llamada `escuela`.
2.  Se crean varias instancias de `Alumno` y `Profesor`.
3.  Se utilizan los métodos de `Colegio` para matricular alumnos y contratar profesores.
4.  Se utilizan los métodos de `Profesor` para asignar alumnos y listar sus alumnos.
5.  Se demuestran las funcionalidades de listar alumnos y profesores del colegio y de quitar alumnos y profesores.

## Uso

Para utilizar este código:

1.  Asegúrate de tener TypeScript instalado (`npm install -g typescript`).
2.  Guarda el código en un archivo llamado, por ejemplo, `SistemaEducativo.ts`.
3.  Si la clase `Persona` está en otro archivo, asegúrate de que la ruta en el `import` sea correcta.
4.  Compila el código TypeScript: `tsc SistemaEducativo.ts`.  Esto generará un archivo JavaScript (`SistemaEducativo.js`).
5.  Ejecuta el archivo JavaScript con Node.js: `node SistemaEducativo.js`.

## Notas

* El código utiliza `console.log()` para mostrar la información.  En una aplicación real, se usaría una interfaz de usuario o un mecanismo de persistencia de datos.
* La clase `Persona` es una dependencia externa.
* El código demuestra conceptos de programación orientada a objetos como herencia (con `extends Persona`), polimorfismo (con el método `mostrarInfo()`) y encapsulación (con el uso de `private` y `protected`).