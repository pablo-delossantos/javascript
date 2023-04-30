// Las condicionales son reglas para poder comprobar si algo es verdadero o falso

if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

//else if
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

//Operador ternario. Es como general el if y el else en una sola linea
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No soy uno";
