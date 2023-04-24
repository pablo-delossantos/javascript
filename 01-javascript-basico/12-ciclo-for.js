//Los ciclos son una forma de hacer que una tarea que pueda repetirse sin hacerlo de manualmente.

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

//Otra forma

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel
