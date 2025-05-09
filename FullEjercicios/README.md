# FullStackBalcarcePOO
# Proyecto TypeScript: Clases y Métodos

Este repositorio contiene ejemplos de clases en TypeScript que representan diferentes objetos del mundo real: un automóvil, una persona, un televisor y un rectángulo. Cada clase tiene sus propias propiedades y métodos que permiten simular comportamientos específicos.

---
# Ejercicio 1

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
# Ejercicio 2
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
# Ejercicio 3
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
# Ejercicio 4
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
# Ejercicio 5
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
# Ejercicio 6
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
# Ejercicio 7: Clase Dado

La clase `Dado` simula el comportamiento de un dado de seis caras.

### Atributos

* `valor`:  (privado, tipo `number`) Almacena el valor actual del dado (entre 1 y 6).

### Métodos

* `constructor()`: Inicializa el dado con un valor aleatorio entre 1 y 6.
* `lanzarDado()`: Simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al atributo `valor` y devuelve el nuevo valor.
* `inicializarDado()`: (privado, tipo `number`) Genera un número aleatorio entre 1 y 6 y lo asigna a `this.valor`.

### Implementación

El código crea una instancia de la clase `Dado` y simula 10 lanzamientos, mostrando el resultado de cada uno en la consola.

# Ejercicio 8: Clase CuentaBancaria

La clase `CuentaBancaria` representa una cuenta bancaria.

### Atributos

* `saldoActual`: (privado, tipo `number`) Almacena el saldo actual de la cuenta.
* `numeroCuenta`: (privado, tipo `number`) Almacena el número de cuenta.

### Métodos

* `constructor(numeroCuenta: number, saldoActual: number)`:  Inicializa una nueva instancia de `CuentaBancaria` con el número de cuenta y saldo proporcionados.
* `agregarDinero(num: number)`:  Incrementa el saldo actual en la cantidad especificada (`num`). Imprime un mensaje en la consola indicando la transacción y el nuevo saldo.
* `retirarDinero(num: number)`:  Disminuye el saldo actual en la cantidad especificada si hay fondos suficientes. Si no hay fondos suficientes, imprime un mensaje de error.  Imprime un mensaje en la consola indicando la transacción y el nuevo saldo (o el error).
* `mostraSaldo()`: Imprime en la consola el número de cuenta y el saldo actual.

### Implementación

El código crea una instancia de `CuentaBancaria`, realiza algunas operaciones de depósito y retiro, y muestra el saldo en la consola.

# Ejercicio 9: Clase Decodificador

La clase `Decodificador`  representa un decodificador de TV.

### Atributos

* `canal`: (privado, tipo `number`) Almacena el canal actual (entre 1 y 99).

### Métodos

* `constructor()`: Inicializa el decodificador en el canal 1.
* `aumentarCanal(num: number)`:  Aumenta el canal actual en la cantidad especificada. Si el nuevo canal excede 99, vuelve al canal 1. Imprime un mensaje en la consola indicando el cambio.
* `disminuirCanal(num: number)`: Disminuye el canal actual en la cantidad especificada. Si el nuevo canal es menor que 1,  va al canal 99. Imprime un mensaje en la consola indicando el cambio.


**Nota:** El ejercicio 9 menciona la clase `Televisor` del ejercicio 2, pero esa clase no está incluida en los archivos proporcionados. Por lo tanto, `Decodificador` se implementa de forma independiente.

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

# Ejercicio 12 🎲 Simulación de Cubilete con 5 Dados

Este proyecto en TypeScript implementa una clase `Cubilete` que simula el comportamiento de un cubilete con 5 dados, utilizando una clase auxiliar `Dado`. Permite lanzar todos los dados a la vez o lanzar un dado específico, replicando una mecánica típica de juegos como Generala o Yahtzee.

## 📁 Estructura

- `Cubilete.ts`: Contiene la clase `Cubilete`, que crea y administra cinco instancias de la clase `Dado`.
- Se importa `Dado` desde `../Ejercicio7/Dado`.

## 🧠 Funcionalidad

### Clase `Cubilete`

- **Constructor**
  - Crea un arreglo de 5 dados (`Dado[]`).
  
- **Método `lanzarDados()`**
  - Lanza los 5 dados del cubilete.
  - Muestra el valor de cada dado.
  - Devuelve la suma total de los valores obtenidos.

- **Método `lanzarDado(num: number)`**
  - Lanza un solo dado específico (1 al 5).
  - Muestra el valor del dado seleccionado.
  - Informa si el dado solicitado no existe (fuera del rango 1–5).

## ✅ Ejemplo de uso

```typescript
const cubilete1 = new Cubilete();
cubilete1.lanzarDados();
cubilete1.lanzarDado(1);
cubilete1.lanzarDado(2);
```

# Ejercicio 13 📚 Sistema de Gestión de Biblioteca

Este proyecto en TypeScript simula el funcionamiento de un sistema para gestionar una colección de libros. Utiliza una clase `Biblioteca` que permite realizar las operaciones básicas: **alta, baja, modificación y consulta** de libros, utilizando como base la clase `Libro` del ejercicio 5.

## 📁 Estructura

- `Biblioteca.ts`: Implementa una clase `Biblioteca` que administra una lista de libros.
- Se importa `Libro` desde `../Ejercicio5/Libro`.

## 🧠 Funcionalidad

### Clase `Biblioteca`

- **Atributos:**
  - `nombre`: Nombre de la biblioteca.
  - `listaLibros`: Arreglo que contiene objetos `Libro`.

- **Métodos principales:**

  - `crearLibros()`: Permite ingresar libros manualmente mediante consola.
  - `insertarLibro(libro: Libro)`: Agrega un libro si no existe previamente.
  - `consultarLibro(titulo: string)`: Busca un libro por título y muestra sus datos.
  - `modificarLibro(titulo: string)`: Permite modificar los datos de un libro existente.
  - `eliminarLibro(titulo: string)`: Realiza una baja lógica (marca el libro como inactivo).

### 🔒 Validación

Antes de cualquier operación (incluso insertar), se verifica si el libro ya existe en la colección. Además, cada libro incluye un campo `activo` para saber si está dado de baja o no.

## ✅ Ejemplo de uso

```typescript
const miBiblioteca = new Biblioteca("Biblioteca Central");
miBiblioteca.crearLibros(); // Carga libros manualmente
miBiblioteca.consultarLibro("El Principito");
```

# Ejercicio 14 🎲 Juego de Generala en TypeScript

Este proyecto implementa una versión simplificada del clásico juego de Generala utilizando programación orientada a objetos en TypeScript. Se utilizan las clases `Persona`, `Cubilete` y una nueva clase `Jugador` para modelar la lógica del juego.

## 🧩 Reglas del Juego

Cada jugador lanza un cubilete (5 dados) hasta **3 veces** por turno. Se buscan las siguientes marcas:

- 🎯 **Escalera**: 20 puntos
- 🧩 **Full**: 30 puntos
- 💥 **Póker**: 40 puntos
- 👑 **Generala**: 50 puntos

> Si ningún jugador logra una marca tras 3 tiros, se declara **empate**. Existe un método de desempate implementado.

## 📁 Estructura

- `Generala.ts`: Archivo principal del juego.
- Requiere:
  - `Persona` desde `../Ejercicio2/Persona`
  - `Cubilete` desde `../Ejercicio12/Cubilete`

## 🧠 Clases utilizadas

### 🔹 `Jugador` (hereda de `Persona`)
- Atributos:
  - `puntaje`: número de puntos obtenidos por jugador.
- Métodos:
  - `mostrarInfo()`: Muestra datos del jugador y su puntaje.
  - `setPuntaje()`: Asigna puntos al jugador.
  - `getPuntaje()`: Obtiene el puntaje del jugador.

### 🔸 Lógica del juego

- Se solicita por consola la cantidad de jugadores y sus datos.
- Cada jugador lanza hasta 3 veces.
- Se detecta qué marca ha obtenido según los dados lanzados.
- Se calcula el puntaje y se determina el ganador.

## ✅ Ejemplo de uso

```bash
Ingrese la cantidad de jugadores: 2
Jugador 1: Juan Pérez, Edad: 30, DNI: 12345678
Jugador 2: Ana Gómez, Edad: 25, DNI: 87654321

--- Turno de Juan ---
Tiro 1: ...
Tiro 2: ...
Tiro 3: Escalera (20 puntos)

--- Turno de Ana ---
Tiro 1: ...
Tiro 2: ...
Tiro 3: Full (30 puntos)

Ganadora: Ana Gómez 🎉