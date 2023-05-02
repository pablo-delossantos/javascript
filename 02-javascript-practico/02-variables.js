// ¿Qué es una variable y para que sirve?
// Espacios en memoria donde podemos guardar informacion, dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje.

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
let nombre = "Pablo de los Santos";

// Declarar es cuando le decimos a JS que vamos a crear una variable con un nombre. Inicializar es asignarle un valor a esa variable.

// ¿Cuál es la diferencia entre sumar números y concatenar strings? ¿Cúal operador usamos para sumar o concatenar?
let suma = 2 + 2; // 4
let sumaString = "Hola, " + "Pablo"; // Hola, Pablo
//Es operador + nos permite sumar o concatenar. Cuando lo usamos con números, los suma. Cuando lo usamos con strings, los concatena.

// Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// nombre: String;
// apellido: String;
// usuario: String; (@usuario)
// edad: Number;
// email: String; (usuario@dominio.com)
// mayorDeEdad: boolean;
// dineroAhorrado: number;
// deudas: number;

// Traduce a código JS estas variables
let firstName = "Pablo";
let lastName = "de los Santos";
let username = "pablo-delossantos";
let edad = 44;
let email = "pdelossantos@nosis.com";
let esMayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 1500;

let nombreCompleto = firstName + " " + lastName; // Pablo de los Santos
let dineroReal = dineroAhorrado - deudas; // 500
