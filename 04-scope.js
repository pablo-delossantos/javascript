// Scope global. Funciona en todo el codigo

var nombre = "Pablo";

function fun() {
    var apellido = "de los Santos"; //Scope local
    return nombre + " " + apellido;
}

//Del local podemos accerder al global, pero no al reves.

console.log(apellido); //apellido is not defined

// ---------
var miNombre = "Pablo";

function nombre() {
    var miApellido = "de los Santos";
    console.log(miNombre + " " + miApellido);
}

nombre();
