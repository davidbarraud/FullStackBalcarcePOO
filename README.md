# FullStackBalcarcePOO

# Ejercicio 1 Proyecto: Clases de Vehículos en TypeScript

Este proyecto implementa un sistema de clases en TypeScript que modela distintos tipos de vehículos con comportamientos personalizados.

## Clases Principales

- **Auto**: Clase base que representa un vehículo común. Incluye métodos para acelerar, desacelerar y frenar.
- **AutoCarrera**: Hereda de `Auto`. Añade la funcionalidad de **nitro** con métodos para usarlo y recargarlo.
- **Camioneta**: También hereda de `Auto`. Puede **cargar peso**, **descargarlo** y tiene una forma especial de acelerar con un "turbo".

## Funcionalidad

- Se crean instancias de `AutoCarrera` y `Camioneta`.
- Se simulan acciones como acelerar, frenar, usar nitro y cargar peso.
- El comportamiento se refleja en la consola con mensajes descriptivos.

## Requisitos

- Node.js y TypeScript instalados para compilar y ejecutar el código.

## Ejecución

Compila el archivo TypeScript y ejecútalo con Node:


tsc archivo.ts
node archivo.js


# Ejercicio3 Proyecto: Herencia de Animales en TypeScript

Este proyecto demuestra el uso de herencia en programación orientada a objetos utilizando TypeScript, a través de una jerarquía de clases que representan animales.

## Clases Principales

- **Animal**: Superclase base que define atributos y métodos generales como `hacerSonido()` y `comer()`.
- **Perro**: Subclase que extiende de `Animal`. Sobrescribe los métodos para emitir sonidos y comer, e incorpora un método propio `correr()`.
- **Pez**: Subclase que también hereda de `Animal`. Implementa su versión de `hacerSonido()` y `comer()`, además de un nuevo método `nadar()`.

## Funcionalidad

- Se crean instancias de `Perro`, `Pez` y un `Animal` genérico.
- Cada instancia ejecuta sus métodos, mostrando diferentes comportamientos según su clase.

## Ejecución

Para compilar y ejecutar el código:


tsc archivo.ts
node archivo.js

# Ejercicio 4 Proyecto: Manejo de Aparatos Electrónicos en TypeScript

Este proyecto simula una jerarquía de clases que representan distintos **aparatos electrónicos** utilizando **Programación Orientada a Objetos** con **TypeScript**. El sistema permite crear objetos como computadoras, minicomponentes y otros dispositivos, modelando su comportamiento mediante herencia, composición y polimorfismo.

---

## 📁 Estructura de Archivos

### 1. `Marca.ts`
Define la clase `Marca`, utilizada por composición en otras clases. Representa la marca de un aparato.

- **Atributos**:
  - `marca: string`

- **Métodos**:
  - `getMarca()`: Retorna el nombre de la marca.

---

### 2. `Aparato.ts`
Superclase base de todos los aparatos.

- **Atributos**:
  - `tipo: string`
  - `marca: Marca` (composición)
  - `volumen: number`
  - `encendido: boolean`

- **Métodos**:
  - `encender()`, `apagar()`, `estado()`
  - `info()` (polimórfico)

---

### 3. `LectoraDvd.ts`
Clase que representa una lectora de DVD. Se usa por **composición** en `Computadora` y `Minicomponente`.

- **Atributos**:
  - `abierta: boolean`

- **Métodos**:
  - `abrirLectora()`: Abre o cierra la lectora.
  - `getEstado()`: Indica si la lectora está abierta o cerrada.

---

### 4. `Computadora.ts`
Hereda de `Aparato` y representa una computadora.

- **Atributos adicionales**:
  - `memoria: number`
  - `microprocesador: string`
  - `lectora: LectoraDvd` (composición)

- **Métodos**:
  - `info()`: Muestra detalles de la computadora.

---

### 5. `Minicomponente.ts`
También hereda de `Aparato`. Representa un equipo de sonido con cinta casette.

- **Atributos adicionales**:
  - `lectora: LectoraDvd` (composición)
  - `minutos: number`

- **Métodos**:
  - `info()`: Información del equipo.
  - `avanzarCasette(num)`, `retrocederCasette(num)`: Simulan el manejo de un casette.

---

### 6. `Aparatos.ts`
Archivo principal donde se crean instancias de `Computadora`, `Minicomponente` y `Aparato`.

- Crea marcas (`Marca`)
- Crea aparatos con esas marcas
- Prueba sus métodos:
  - Encendido/apagado
  - Estados
  - Manejo de lectoras y casettes
  - Salida por consola de información de cada aparato

---

## 🚀 Ejecución

Para ejecutar este proyecto:

1. Asegúrate de tener instalado TypeScript:
   ```bash
   npm install -g typescript