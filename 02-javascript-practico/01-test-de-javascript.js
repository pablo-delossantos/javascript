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
// Sumar es una operación matemática que se utiliza con numeros. Cuando sumamos numeros usamos el operador de suma (+)
4 + 5;

// l mismo operador se usa para concatenar strings

var nombre = "Pablo";
var apellido = " de los Santos";
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

var nombre = "Pablo";
var apellido = "de los Santos";
var perfil = "pablo-delossantos";
var edad = 44;
var email = "pdelossantos@nosis.com";
var mayorDeEdad = true;
var dineroAhorrado = 2000;
var deudas = 1500;

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
