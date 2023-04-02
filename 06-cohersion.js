//Cohersion es cambiar de un tipo de valor a otro tipo de valor

4 + "7"; //47
4 * "7"; //28

// Implicita es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor

var a = 4 + "7"; //undefined
typeof a; //"string"

var b = 4 * "7";
typeof b; //"nomber"

// Explícita es cuando nosotros obligamos para que un valor cambie a otro tipo de valor

var a = 20;
var b = a + "";

var c = String(a);
var d = Number(c);
