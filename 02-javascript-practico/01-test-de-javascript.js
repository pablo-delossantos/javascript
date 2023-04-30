// ¿Qué es una variable y para que sirve?
// Una variable es la representacion de algun lugar en memoria que vamos a usar para guardar un valor.

//=======

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// Declarar una variable es asignarle un nombre. Incializar una variable es asignarle un valor

// 1. Declarar
var edad;

// 2. Inicializar
edad = 44;

// Se puede declarar y asignar una variable de una vez.

var edad = 44;

//=======

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// Sumar es una operación matemática que se utiliza con números. Cuando sumamos numeros usamos el operador de suma (+)
4 + 5;

// El mismo operador se usa para concatenar strings

var nombre = "Pablo ";
var apellido = "de los Santos";
nombre + apellido; //Pablo de los Santos

//=======

// Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// nombre = String;
// apellido = String;
// usuario = String;
// edad = Number;
// email = String;
// mayorDeEdad = boolean;
// dineroAhorrado = number;
// deudas = number;

let nombre = "Pablo";
let apellido = "de los Santos";
let perfil = "pablo-delossantos";
let edad = 44;
let email = "pdelossantos@nosis.com";
let mayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 1500;

console.log(`Mi nombre completo es ${nombre} ${apellido}`);

var dineroReal = dineroAhorrado - deudas;

console.log(`Dinero real es ${dineroReal}`);

//=======

// ¿Qué es una función?
// Las funciones son un conjunto de sentencias para generar ciertas acciones con los valores que guardamos en las variables.

// ¿Cuándo me sirve usar una función en mi código?
// Cuando queremos utilizar la información gurdada en los variables para realizar alguna accion o evento.

// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// Los parametros son variables que reciben un valor.
// Los argumentos son los valores asignados a los parametros cuando se ejecuta la función.

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const nombre = "Juan David";
const lastname = "Castro Gallego";
const completeName = nombre + lastname;
const nickname = "juandc";

function data(completeName, nickName) {
    console.log(
        "Mi nombre es " +
            completeName +
            ", pero prefiero que me digas " +
            nickName +
            "."
    );
}

data("Pablo de los Santos", "Dédalo");

//========

// ¿Qué es un condicional?
// Las condicionales son reglas para poder comprobar si algo es verdadero o falso.
// if, else, else if, switch
// Se pueden combinar funciones y condicionales. La funcion puede ser un condicional.

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log(
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
} else {
    console.log("No tienes ninguna suscripcion");
}

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion === "ExpertPlus") {
    console.log(
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
}

//=======
// ¿Qué es un ciclo?
// Los ciclos son una forma de hacer que una tarea que pueda repetirse sin hacerlo de manualmente.

// ¿Qué tipos de ciclos existen en JavaScript?
// Ciclo For, ciclo While, Do While.

// Un ciclo infinito es un ciclo que nunca se detiene. Trae el problema de saturar la memoria.

// Se pueden mezclar ciclos y condicionales.

//=======
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// let i = 10;
// while (i >= 2) {
//     console.log("El valor de i es: " + i);
//     i--;
// }

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta = prompt("¿Cuánto es 2 + 2?");

while (respuesta != "4") {
    respuesta = prompt("Incorrecto. ¿Cuánto es 2 + 2?");
}

alert("¡Correcto! ¡Bien hecho!");

//=========
//¿Qué es un array?
// Un array es una estructura de datos tipo objeto. Es un valor que va a guardar mas valores adentro (numeros, strings, objetos, otros arrays).

//¿Qué es un objeto?
// Las propiedades de un objeto estan compuestas por una clave-valor. En el caso de que la propiedad sea una función, la llamaremos método. Un objeto es un conjuto de estas propiedades.

//¿Cuándo es mejor usar objetos o arrays?
// Cuando las propiedades son de distinto tipo, usamos objetos.

//¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//Sí, en JavaScript puedes mezclar arrays con objetos o incluso objetos con arrays. Esto se debe a que JavaScript es un lenguaje de programación flexible y dinámico que no impone restricciones estrictas en la estructura de datos.
// Por ejemplo, puedes tener un objeto que contenga una propiedad que sea un array, o un array que contenga objetos como elementos.

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let miArray = [1, 2, 3, 4, 5];
imprimirElementos(miArray);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementos(array) {
    array.forEach((elemento) => {
        console.log(elemento);
    });
}
const miNuevoArray = [1, 2, 3];
imprimirElementos(miNuevoArray);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirPropiedades(objeto) {
    for (let propiedad in objeto) {
        console.log(`${propiedad}: ${objeto[propiedad]}`);
    }
}
const miObjeto = {
    nombre: "Pablo",
    edad: 44,
    profesion: "Maquetador Web",
};

imprimirPropiedades(miObjeto);
