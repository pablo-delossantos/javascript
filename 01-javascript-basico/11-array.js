// Un array es una estructura de datos tipo objeto. Es un valor que va a guardar mas valores adentro (numeros, strings, objetos, otros arrays).

var frutas = ["Manzana", "Platano", "Cereza", "Frutilla"];

console.log(frutas);

// Tenemos dos tipos de elementos que son métodos. El primero nos ayuda a agregar o quitar elementos podemos usar los siguientes métodos.

// Método push. Agrega el elemento al final del array

var masFrutas = frutas.push("Uvas");
// ['Manzana', 'Platano', 'Cereza', 'Frutilla', 'Uvas']

// Método pop. Elimina el último elemento del array.

var ultimo = frutas.pop("Uvas");

// Método unshift. Agrega un elemento al principio del array.

var nuevaLongitud = frutas.unshift("Uvas");

// Método shift. Elimina un elemento al principio del array.

var borrarFruta = frutas.shift("Uvas");

// Método IndexOf. Nos muestra la posición del elemento

var posicion = frutas.indexOf("Cereza");
