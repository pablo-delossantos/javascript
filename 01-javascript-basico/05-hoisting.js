//Hoisting es cuando las variables y las funciones se declaran antes de que se procese el código. Solo pasa en versiones de ES5 o anteriores.

// Se declara
var miNombre;

// Se inicializa
miNombre = "Pablo";

// Las dos cosas a la vez
var miNombre = "Pablo";

// Con el hoisting mandamos a llamar la variable sin haberla declarado

console.log(miNombre);

var miNombre = "Pablo";

// QUe es lo que hace JavaScript con esta variable?

var miNombre = undefined;

console.log(miNombre + "Spy ese Hoisting"); // undefined

miNombre = "Pablo";
