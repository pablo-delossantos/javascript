// Las funciones son un conjunto de sentencias para generar ciertas acciones con los valores que guardamos en las variables.

// Declarativas
function miFuncion() {
    return 3;
} // Declaramos la funcion

miFuncion();

// Expresión. Tambien se conoce como "Función anónima", porque no le ponemos nombre a la función.
var miFuncion = function (a, b) {
    return a + b;
};

miFuncion();

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Pablo"); // Pablo

// Plantilla de cadena de texto
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Pablo"); // Hola Pablo
// Asi lo podemos conectar con una base de datos para traer todos los nombres.

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

sumar(1, 2); // 3
// Regresamos con la palabra reservada return

function sumar(a, b) {
    return a + b;
}
sumar(3, 4); // 7
