// Si tengo qun array de objetos, los podemos recorrer con los siguientes métodos.

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 2500 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Filter: valida si algo es verdad o falso, y lo mete en un nuevo array
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

// Agrega a un nuevo array solo los articulos que cumplen con la validación

//================

// Map: ayuda a mapear ciertos articulos. Tambien genera un nuevo array
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
}); // nombreArticulos
// ['Bici', 'Television', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']
