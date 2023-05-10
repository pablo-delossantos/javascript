// ¿Que es un condicional?
// Es la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

// ¿Qué tipos de condicionales existen en JavaScript y cuales son sus diferencias?
// if (else y else if), switch

// El condicional if (con else y else if) nos permite hacer validaciones completamente distintas si hasi queremos en cada validación o condicional. En el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.

// ¿Se pueden combinar funciones y condicionales?
// Si. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

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
