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