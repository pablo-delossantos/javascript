// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if.

const tipoDeSuscripcion = "Basic"

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Tu y alguién mas pueden tomar todos los cursos de Platzi durante un año");
}

// Una opción es metor todos los condicioanles en una funcion

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == "Basic") {
        console.log("Puedes tomar todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == "Expert") {
        console.log("Puedes tomar todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == "Expert duo") {
        console.log("Tu y alguién mas pueden tomar todos los cursos de Platzi durante un año");
        return;
    }

    console.warn("Ese tipo de suscripcion no existe")

}

conseguirTipoSuscripcion("Expert")
// Puedes tomar todos los cursos de Platzi durante un año.

// Bonus: si ya eres una experta o experto en este lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un sólo condicional.
