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

### 🛠️ Requisitos
- TypeScript

### ▶️ Cómo ejecutar
Compilar los archivos `.ts` usando el compilador de TypeScript y luego ejecutar el archivo `.js` con Node.js.

```bash
tsc archivo.ts
node archivo.js