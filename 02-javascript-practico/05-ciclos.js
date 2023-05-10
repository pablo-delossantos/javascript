// ¿Qué es un ciclo?
// Un ciclo es una forma de ejecutar algun bloque de código hasta que se compla cierta condición.

// ¿Qué tipo de ciclos existen en JavaScript?
// While, Do while, For.

// ¿Qué es un ciclo infinito y por qué es un problema?
// Es cuando la validación de nuestros condicionales nunca se cumple y termian dañando la aplicación.

// ¿Podemos condicionar ciclos y condicionales?
// Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro del ciclo.

// Replica el comportamiento de los siguientes ciclos for utilizando un ciclo while:

for (let i = 0; i < 5; i++) {
    console.log("el valor de i es: " + i)
}

let i = 0;

while (i < 5) {
    console.log("el valor de i es: " + i);
    i++;
}

//--------

for (let i = 10; i >= 2; i--) {
    console.log("el valor de i es: " + i)
}

let i = 10

while (i >= 2) {
    console.log("el valor de i es: " + i);
    i--
}

// Escribe un código en JavaScript cuanto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. Puedes utilizar la función prompt de JavaScript.

let respuesta;

while (respuesta != "4") {
    let pregunta = prompt("¿Cuánto es 2 + 2?")
    respuesta = pregunta;
}