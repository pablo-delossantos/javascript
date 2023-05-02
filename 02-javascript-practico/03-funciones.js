// ¿Qué es una función?
// Son la forma en la que escapsulamos bloques de código para reutilizarlos luego.

function nombreCompleto(name, lastname) {
    return name + " " + lastname;
}
nombreCompleto("Soledad", "Alvarez");
// 'Soledad Alvarez'

// Nos sirve cuando tenemos variables o bloques de codigo con cambios que podrían ser parámetros o argumentos que podamos encapsular para reutilizar más de una vez en el futuro.
// Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro código.

// Los parámetros son los que recibe una función cuando las creamos. En este caso name, lastname
// Les envíamos argumentos cuando las ejecutamos. En este caso Soledad, Alvarez.

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
