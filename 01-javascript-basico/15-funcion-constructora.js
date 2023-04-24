// Funcion constructora.
// Permite hacer objetos de forma automática. Podemos generar un template del objeto.

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Vamos a utilizar un nuevo operador: new
// Genera una nueva instancia de nuestra funcion constrictora. Una instancia es un objeto que deriva de otro objeto.

var autoNuevo = new auto("Tesla", "Model 3", 2020);

//autoNuevo
//auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
//autoNuevo2
// auto {marca: 'Tesla', modelo: 'Model X', annio: 2018

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//autoNuevo3
//auto {marca: 'Toyota', modelo: 'Corolla', annio: 2020}
