// ¿Qué es un array?
// Es una lista de elementos
const array = [1, "string", true, false];

// ¿Qué es un objeto?
// Es una lista de elementos, pero cada elemento tiene un nombre clave (key, value).
const objeto = {
    nombre: "Fulanito",
    edad: 3,
};

// ¿Cuando es mejor usar objetos o arrays?
// Arrays cuando lo que haremos en un elemento es lo mismo en todo lo demas (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Si. Los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades.
const objeto = {
    nombre: "Fulanito",
    edad: 3,
    comidasFavoritas: ["Pollo frito", "Vegetales"],
};

const array = [1, "string", true, false, {
    nombre: "Fulanita",
    edad: 5,
}];

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer resultado.
function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray(["Juan", "Roberto", "Natalia"]);
// "Juan"

// Crea una función que pueda recibir cualquier array cómo parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length;i++) {
        console.log(arr[i])
    }
}
imprimirElementoPorElemento(["Juan","Roberto","Natalia"])


// Crea una función que pueda recibir cualquier objeto como parámetro para poder imprimir sus elementos uno por uno.
const objeto = {
    nombre: "Fulanito",
    edad: 3,
    comidasFavoritas: ["Pollo frito", "Vegetales"],
};

function imprimirElementoPorElementoObjeto(objeto) {
    const arr = Object.values(objeto);
    for (let i = 0; i < arr.length;i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto(objeto)

// Fulanito
// 3
// (2) ['Pollo frito', 'Vegetales']
