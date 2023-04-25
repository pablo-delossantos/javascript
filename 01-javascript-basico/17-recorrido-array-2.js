var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 2500 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Método Find. Busca un término.

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

encuentraArticulo;

//=============

// El metodo forEach no genera un nuevo array, sino que filtra sobre el mismo array sin modificar

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

// Bici
// Television
// Libro
// Celular
// Laptop
// Teclado
// Audifonos

//=============

// El método some regresa una validacion de verdadero o falso para los que cumplan con esa validacion

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});

// articulosBaratos
// true;
