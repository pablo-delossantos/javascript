// Objetos. javaScript es un lenguaje diseñado en base a un paradigma de objetos.
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
};

// miAuto
// {marca: 'Toyota', modelo: 'Corolla', annio: 2020}

// Lo llamamos
// miAuto.marca
// "Toyota"

//miAuto.annio
//2020

// Las propiedades estan compuestas por una clave-valor. En el caso de que la propiedad sea una función, la llamaremos método.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    },
};

// miAuto.detalleDelAuto();
// Auto Corolla 2020

// El this es una variable que hace referencia al objeto, en este caso su objeto padre.
