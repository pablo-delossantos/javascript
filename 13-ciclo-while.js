var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// (4) ['Maria', 'Sergio', 'Rosa', 'Daniel']
// Hola, Maria
// (3) ['Sergio', 'Rosa', 'Daniel']
// Hola, Sergio
// (2) ['Rosa', 'Daniel']
// Hola, Rosa
// ['Daniel']
// Hola, Daniel
